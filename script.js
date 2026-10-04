// Сайт работает без сторонних библиотек.

document.addEventListener('DOMContentLoaded', function () {
  const quiz = document.getElementById('spb-quiz');
  if (!quiz) return;

  const result = document.getElementById('quiz-result');
  const questions = Array.from(quiz.querySelectorAll('.quiz-question'));

  function checkQuiz() {
    // Для каждого вопроса достаточно выбрать хотя бы один вариант.
    // При этом внутри одного вопроса можно отметить несколько вариантов.
    const completed = questions.every(function (question) {
      return question.querySelectorAll('input[type="checkbox"]:checked').length > 0;
    });

    const wasCompleted = result.classList.contains('visible');
    result.classList.toggle('visible', completed);

    // После выбора последнего ответа мягко показываем подсказку,
    // но не прокручиваем страницу автоматически.
    if (completed && !wasCompleted) {
      result.animate(
        [{opacity: 0, transform: 'translateY(8px)'}, {opacity: 1, transform: 'translateY(0)'}],
        {duration: 280, easing: 'ease-out'}
      );
    }
  }

  quiz.addEventListener('change', checkQuiz);
});
