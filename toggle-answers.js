(function () {
    const root = document.documentElement;
    if (!root.classList.contains('js-enabled')) {
        root.classList.add('js-enabled');
    }

    const isValidTarget = (element) => element && (element.classList.contains('answer') || element.classList.contains('explanation'));

    const collectTargets = (questionEl, index) => {
        const answers = new Set();
        const explanations = new Set();

        const scoped = questionEl.querySelectorAll(':scope .answer, :scope .explanation');
        scoped.forEach((el) => {
            if (el.classList.contains('answer')) {
                answers.add(el);
            } else {
                explanations.add(el);
            }
        });

        if (answers.size === 0 && explanations.size === 0) {
            let sibling = questionEl.nextElementSibling;
            while (sibling) {
                if (isValidTarget(sibling)) {
                    if (sibling.classList.contains('answer')) {
                        answers.add(sibling);
                    } else {
                        explanations.add(sibling);
                    }
                    sibling = sibling.nextElementSibling;
                    continue;
                }
                break;
            }
        }

        const assignId = (el, suffix) => {
            if (!el.id) {
                const base = el.classList.contains('answer') ? 'answer' : 'explanation';
                el.id = `${base}-${index + 1}-${suffix}`;
            }
        };

        let counter = 1;
        [...answers, ...explanations].forEach((el) => {
            assignId(el, counter);
            counter += 1;
        });

        return {
            answers: Array.from(answers),
            explanations: Array.from(explanations),
        };
    };

    document.addEventListener('DOMContentLoaded', () => {
        const questions = Array.from(document.querySelectorAll('.question'));

        if (questions.length === 0) {
            return;
        }

        let checkAllButton = document.getElementById('check-all-answers');
        if (!checkAllButton) {
            const title = document.querySelector('.quiz-title, .content-title');
            if (title) {
                checkAllButton = document.createElement('button');
                checkAllButton.type = 'button';
                checkAllButton.id = 'check-all-answers';
                checkAllButton.className = 'check-answer check-all';
                checkAllButton.textContent = 'Check All Answers';
                title.insertAdjacentElement('afterend', checkAllButton);
            }
        } else {
            checkAllButton.type = 'button';
            checkAllButton.classList.add('check-answer', 'check-all');
            if (!checkAllButton.textContent.trim()) {
                checkAllButton.textContent = 'Check All Answers';
            }
        }

        const configs = [];

        const updateCheckAllLabel = () => {
            if (!checkAllButton) {
                return;
            }
            const shouldHide = configs.length > 0 && configs.every(({ isVisible }) => isVisible());
            checkAllButton.textContent = shouldHide ? 'Hide All Answers' : 'Check All Answers';
        };

        questions.forEach((questionEl, index) => {
            const { answers, explanations } = collectTargets(questionEl, index);
            const targets = [...answers, ...explanations];

            if (targets.length === 0) {
                return;
            }

            let toggleButton = questionEl.querySelector(':scope .check-answer:not(.check-all)');

            if (!toggleButton) {
                toggleButton = document.createElement('button');
                toggleButton.type = 'button';
                toggleButton.className = 'check-answer';
                toggleButton.textContent = 'Check Answer';

                const firstNestedTarget = targets.find((target) => target.parentElement === questionEl);
                if (firstNestedTarget) {
                    questionEl.insertBefore(toggleButton, firstNestedTarget);
                } else {
                    const reference = targets[0];
                    reference.parentElement.insertBefore(toggleButton, reference);
                }
            } else {
                toggleButton.type = 'button';
            }

            const controlsValue = targets.map((el) => el.id).join(' ');
            if (controlsValue) {
                toggleButton.setAttribute('aria-controls', controlsValue);
            }

            const setVisibility = (shouldShow) => {
                targets.forEach((target) => {
                    if (shouldShow) {
                        target.classList.add('visible');
                    } else {
                        target.classList.remove('visible');
                    }
                });
                toggleButton.textContent = shouldShow ? 'Hide Answer' : 'Check Answer';
                toggleButton.setAttribute('aria-expanded', shouldShow ? 'true' : 'false');
            };

            const isVisible = () => targets.every((target) => target.classList.contains('visible'));

            setVisibility(false);

            toggleButton.addEventListener('click', () => {
                setVisibility(!isVisible());
                updateCheckAllLabel();
            });

            configs.push({ setVisibility, isVisible });
        });

        if (checkAllButton) {
            checkAllButton.addEventListener('click', () => {
                const shouldShow = configs.some(({ isVisible }) => !isVisible());
                configs.forEach(({ setVisibility }) => setVisibility(shouldShow));
                updateCheckAllLabel();
            });

            updateCheckAllLabel();
        }
    });
})();
