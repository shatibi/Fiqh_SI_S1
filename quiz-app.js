console.log("quiz-app.js chargé");

// ==================== VARIABLES GLOBALES ====================
let currentQuestions = [];          // Questions du quiz en cours
let currentQuestionIndex = 0;       // Index de la question actuelle
let score = 0;                      // Score actuel
let selectedOptions = {};           // Réponses sélectionnées par l'utilisateur
let userAnswers = [];               // Toutes les réponses pour l'affichage final
let isQuestionAnswered = {};        // Suivi des questions déjà répondues
let quizMode = 'practice';          // 'practice' ou 'exam'

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM complètement chargé");
    console.log(`📚 ${quizData.length} questions disponibles`);
    
    // Afficher le nombre total de questions
    document.getElementById('totalQuestions').textContent = quizData.length;
    
    // Initialiser tous les événements
    initializeEventListeners();
    
    // Initialiser le mode de quiz
    initializeQuizMode();
    
    console.log("🎯 Quiz prêt à démarrer !");
});

// ==================== INITIALISATION DU MODE QUIZ ====================
function initializeQuizMode() {
    const modeSelect = document.getElementById('quizMode');
    if (!modeSelect) {
        // Créer le sélecteur de mode s'il n'existe pas
        const optionsDiv = document.querySelector('.options');
        const modeHtml = `
            <div class="option-group">
                <label for="quizMode">
                    📝 Mode du quiz :
                </label>
                <select id="quizMode">
                    <option value="practice">Mode apprentissage (correction immédiate)</option>
                    <option value="exam">Mode examen (correction à la fin)</option>
                </select>
            </div>
        `;
        optionsDiv.insertAdjacentHTML('beforeend', modeHtml);
        
        // Ajouter l'écouteur d'événement
        document.getElementById('quizMode').addEventListener('change', function() {
            quizMode = this.value;
            console.log(`🔄 Mode changé : ${quizMode}`);
        });
    }
    
    quizMode = 'practice'; // Mode par défaut
}

// ==================== GESTION DES ÉVÉNEMENTS ====================
function initializeEventListeners() {
    console.log("🔧 Initialisation des événements...");
    
    // 1. Bouton "Commencer le Quiz"
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
        console.log("Événement 'startBtn' attaché");
    } else {
        console.error("Bouton 'startBtn' non trouvé !");
        return;
    }
    
    // 2. Boutons de navigation
    document.getElementById('prevBtn').addEventListener('click', showPreviousQuestion);
    document.getElementById('nextBtn').addEventListener('click', showNextQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitQuiz);
    
    // 3. Boutons des résultats
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);
    document.getElementById('newQuizBtn').addEventListener('click', goToStartScreen);
    
    // 4. Bouton "Voir correction"
    document.getElementById('showExplanationBtn').addEventListener('click', showExplanation);
    
    console.log("Tous les événements initialisés");
}

// ==================== DÉMARRER LE QUIZ ====================
function startQuiz() {
    console.log("🎯 Démarrage du quiz...");
    
    try {
        // 1. Récupérer le nombre de questions choisi
        const questionCountSelect = document.getElementById('questionCount');
        let questionCount = parseInt(questionCountSelect.value);
        
        // 2. Si "Toutes les questions" est sélectionné
        if (questionCountSelect.value === 'all' || questionCount > quizData.length) {
            questionCount = quizData.length;
        }
        
        // 3. Limiter entre 1 et le nombre total de questions
        questionCount = Math.max(1, Math.min(questionCount, quizData.length));
        
        console.log(`📊 Sélection de ${questionCount} questions sur ${quizData.length} disponibles`);
        
        // 4. MÉLANGER TOUTES LES QUESTIONS et prendre un échantillon aléatoire
        const shuffledAllQuestions = shuffleArray([...quizData]);
        currentQuestions = shuffledAllQuestions.slice(0, questionCount);
        
        console.log(`${currentQuestions.length} questions aléatoires sélectionnées`);
        
        // 5. RÉINITIALISER TOUTES LES VARIABLES
        currentQuestionIndex = 0;
        score = 0;
        selectedOptions = {};
        userAnswers = [];
        isQuestionAnswered = {};
        
        // 6. Récupérer le mode de quiz
        const modeSelect = document.getElementById('quizMode');
        if (modeSelect) {
            quizMode = modeSelect.value;
        }
        
        console.log(`📝 Mode : ${quizMode === 'practice' ? 'Apprentissage' : 'Examen'}`);
        
        // 7. Mettre à jour l'affichage initial
        updateScoreDisplay();
        updateProgressBar();
        
        // 8. CHANGER D'ÉCRAN
        document.getElementById('startScreen').classList.remove('active');
        document.getElementById('quizScreen').classList.add('active');
        document.getElementById('resultsScreen').classList.remove('active');
        
        // 9. AFFICHER LA PREMIÈRE QUESTION
        showCurrentQuestion();
        
    } catch (error) {
        console.error("Erreur dans startQuiz:", error);
        alert("Une erreur est survenue: " + error.message);
    }
}

// ==================== MÉLANGER LES QUESTIONS ====================
function shuffleArray(array) {
    console.log("Mélange aléatoire des questions...");
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ==================== AFFICHER LA QUESTION ACTUELLE ====================
function showCurrentQuestion() {
    console.log(`Affichage question ${currentQuestionIndex + 1}/${currentQuestions.length}`);
    
    try {
        const question = currentQuestions[currentQuestionIndex];
        
        if (!question) {
            console.error("Question non trouvée !");
            return;
        }
        
        // 1. Mettre à jour le compteur de question
        document.getElementById('questionCounter').textContent = 
            `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        
        // 2. Afficher le texte de la question
        document.getElementById('questionText').innerHTML = question.question;
        
        // 3. Cacher la zone d'explication
        document.getElementById('explanationContainer').style.display = 'none';
        document.getElementById('explanationText').innerHTML = '';
        
        // 4. AFFICHER LES OPTIONS DE RÉPONSE
        displayOptions(question);
        
        // 5. METTRE À JOUR LES BOUTONS DE NAVIGATION
        updateNavigationButtons();
        
        // 6. METTRE À JOUR LA BARRE DE PROGRESSION
        updateProgressBar();
        
        // 7. Gérer le bouton "Voir correction"
        updateExplanationButton();
        
    } catch (error) {
        console.error("Erreur dans showCurrentQuestion:", error);
    }
}

// ==================== AFFICHER LES OPTIONS ====================
function displayOptions(question) {
    const optionsContainer = document.getElementById('optionsContainer');
    const isAnswered = isQuestionAnswered[currentQuestionIndex];
    const selectedIndex = selectedOptions[currentQuestionIndex];
    
    // Vider le conteneur
    optionsContainer.innerHTML = '';
    
    // Créer un bouton pour chaque option
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option';
        optionButton.innerHTML = option;
        
        // Si la question est déjà répondue
        if (isAnswered) {
            optionButton.disabled = true;
            
            // Marquer la bonne réponse en vert
            if (index === question.correctAnswer) {
                optionButton.classList.add('correct-answer');
            }
            
            // Marquer la mauvaise réponse choisie en rouge
            if (selectedIndex !== undefined && index === selectedIndex && index !== question.correctAnswer) {
                optionButton.classList.add('wrong-answer');
            }
        }
        
        // Si cette option a déjà été sélectionnée (mais pas encore validée)
        if (selectedIndex === index && !isAnswered) {
            optionButton.classList.add('selected');
        }
        
        // Ajouter l'événement de clic (seulement si pas encore répondu)
        if (!isAnswered) {
            optionButton.addEventListener('click', function() {
                selectOption(index);
            });
        }
        
        // Ajouter au conteneur
        optionsContainer.appendChild(optionButton);
    });
}

// ==================== SÉLECTIONNER UNE OPTION ====================
function selectOption(optionIndex) {
    console.log(`Option ${optionIndex} sélectionnée`);
    
    const question = currentQuestions[currentQuestionIndex];
    selectedOptions[currentQuestionIndex] = optionIndex;
    
    // En mode examen, on ne montre pas la correction tout de suite
    if (quizMode === 'exam') {
        isQuestionAnswered[currentQuestionIndex] = true;
        
        // Mettre à jour l'affichage
        displayOptions(question);
        updateExplanationButton();
        
        // Passer automatiquement à la question suivante après 1 seconde
        setTimeout(() => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                showCurrentQuestion();
            }
        }, 1000);
        
        return;
    }
    
    // En mode apprentissage, on montre la correction immédiatement
    showAnswerFeedback(question, optionIndex);
}

// ==================== AFFICHER LA CORRECTION ====================
function showAnswerFeedback(question, selectedIndex) {
    isQuestionAnswered[currentQuestionIndex] = true;
    
    // Marquer si la réponse est correcte
    const isCorrect = (selectedIndex === question.correctAnswer);
    
    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }
    
    // Mettre à jour l'affichage des options avec les couleurs
    displayOptions(question);
    
    // Afficher l'explication
    showExplanation();
    
    // Enregistrer la réponse pour l'affichage final
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        userAnswer: selectedIndex,
        correctAnswer: question.correctAnswer,
        options: question.options,
        explanation: question.explanation,
        isCorrect: isCorrect
    };
    
    console.log(`Réponse ${isCorrect ? 'correcte' : 'incorrecte'} - Score: ${score}`);
}

// ==================== AFFICHER L'EXPLICATION ====================
function showExplanation() {
    const question = currentQuestions[currentQuestionIndex];
    const selectedIndex = selectedOptions[currentQuestionIndex];
    
    if (selectedIndex === undefined) {
        alert("Veuillez d'abord sélectionner une réponse !");
        return;
    }
    
    const isCorrect = (selectedIndex === question.correctAnswer);
    const explanationContainer = document.getElementById('explanationContainer');
    const explanationText = document.getElementById('explanationText');
    
    let feedback = '';
    
    if (isCorrect) {
        feedback = `
            <div style="color: #28a745; font-weight: bold; margin-bottom: 15px;">
                ✓ Bonne réponse !
            </div>
        `;
    } else {
        feedback = `
            <div style="color: #dc3545; font-weight: bold; margin-bottom: 15px;">
                ✘ Réponse incorrecte
            </div>
            <div style="margin-bottom: 15px;">
                <strong>La bonne réponse était :</strong><br>
                ${question.options[question.correctAnswer]}
            </div>
        `;
    }
    
    explanationText.innerHTML = feedback + `
        <div style="margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <strong> Explication :</strong><br>
            ${question.explanation}
        </div>
    `;
    
    explanationContainer.style.display = 'block';
    
    // Faire défiler jusqu'à l'explication
    explanationContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== METTRE À JOUR LE BOUTON EXPLICATION ====================
function updateExplanationButton() {
    const showExplanationBtn = document.getElementById('showExplanationBtn');
    const isAnswered = isQuestionAnswered[currentQuestionIndex];
    const hasSelection = (selectedOptions[currentQuestionIndex] !== undefined);
    
    if (isAnswered || quizMode === 'exam') {
        showExplanationBtn.style.display = 'none';
    } else if (hasSelection) {
        showExplanationBtn.style.display = 'inline-block';
        showExplanationBtn.disabled = false;
    } else {
        showExplanationBtn.style.display = 'inline-block';
        showExplanationBtn.disabled = true;
    }
}

// ==================== NAVIGATION ====================
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showCurrentQuestion();
    }
}

function showNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showCurrentQuestion();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Désactiver "Précédent" sur la première question
    prevBtn.disabled = (currentQuestionIndex === 0);
    
    // Désactiver "Suivant" sur la dernière question
    nextBtn.disabled = (currentQuestionIndex === currentQuestions.length - 1);
    
    // Afficher "Terminer" seulement sur la dernière question
    if (currentQuestionIndex === currentQuestions.length - 1) {
        submitBtn.style.display = 'inline-block';
    } else {
        submitBtn.style.display = 'none';
    }
}

// ==================== METTRE À JOUR L'AFFICHAGE ====================
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar && currentQuestions.length > 0) {
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
}

function updateScoreDisplay() {
    document.getElementById('score').textContent = `Score: ${score}`;
}

// ==================== SOUMETTRE LE QUIZ ====================
function submitQuiz() {
    console.log("Soumission du quiz...");
    
    // Calculer le score final (pour le mode examen)
    if (quizMode === 'exam') {
        calculateFinalScore();
    } else {
        // Pour le mode apprentissage, le score est déjà calculé
        // Mais on vérifie si toutes les questions ont été répondues
        const unansweredQuestions = currentQuestions.filter((_, index) => !isQuestionAnswered[index]);
        if (unansweredQuestions.length > 0) {
            if (!confirm(`Vous n'avez pas répondu à ${unansweredQuestions.length} question(s). Souhaitez-vous terminer quand même ?`)) {
                return;
            }
        }
    }
    
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Mettre à jour l'affichage des résultats
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('incorrectCount').textContent = totalQuestions - score;
    document.getElementById('totalCount').textContent = totalQuestions;
    
    // Mettre à jour la couleur du cercle de score
    updateScoreCircle(percentage);
    
    // Afficher le détail des réponses
    displayReview();
    
    // Changer d'écran
    document.getElementById('quizScreen').classList.remove('active');
    document.getElementById('resultsScreen').classList.add('active');
    
    console.log(`Quiz terminé ! Score: ${score}/${totalQuestions} (${percentage}%)`);
}

function calculateFinalScore() {
    score = 0;
    userAnswers = [];
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = selectedOptions[index];
        const isCorrect = (userAnswer === question.correctAnswer);
        
        if (isCorrect) {
            score++;
        }
        
        userAnswers[index] = {
            question: question.question,
            userAnswer: userAnswer,
            correctAnswer: question.correctAnswer,
            options: question.options,
            explanation: question.explanation,
            isCorrect: isCorrect
        };
    });
}

function updateScoreCircle(percentage) {
    const scoreCircle = document.querySelector('.score-circle');
    if (!scoreCircle) return;
    
    let color;
    if (percentage >= 80) color = '#28a745';
    else if (percentage >= 60) color = '#ffc107';
    else color = '#dc3545';
    
    scoreCircle.style.background = 
        `conic-gradient(${color} 0%, ${color} ${percentage}%, #eee ${percentage}%, #eee 100%)`;
}

function displayReview() {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        if (!answer) return;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        const userAnswerText = (answer.userAnswer !== undefined) 
            ? answer.options[answer.userAnswer]
            : 'Aucune réponse';
        
        const correctAnswerText = answer.options[answer.correctAnswer];
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <strong>Question ${index + 1}:</strong> ${answer.question}
            </div>
            <div class="review-answer">
                <strong>Votre réponse:</strong> ${userAnswerText}
                ${answer.isCorrect ? ' ✓ ' : ' ✘ '}
            </div>
            ${!answer.isCorrect ? `
                <div class="review-answer">
                    <strong>Réponse correcte:</strong> ${correctAnswerText}
                </div>
            ` : ''}
            <div class="review-answer">
                <strong>Explication:</strong> ${answer.explanation}
            </div>
        `;
        
        reviewList.appendChild(reviewItem);
    });
}

// ==================== GESTION DU QUIZ ====================
function restartQuiz() {
    console.log("Redémarrage du quiz...");
    
    currentQuestionIndex = 0;
    score = 0;
    selectedOptions = {};
    userAnswers = [];
    isQuestionAnswered = {};
    
    // Mélanger à nouveau les questions
    const shuffledQuestions = shuffleArray([...quizData]);
    currentQuestions = shuffledQuestions.slice(0, currentQuestions.length);
    
    updateScoreDisplay();
    updateProgressBar();
    
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('quizScreen').classList.add('active');
    
    showCurrentQuestion();
}

function goToStartScreen() {
    console.log("Retour à l'accueil");
    document.getElementById('resultsScreen').classList.remove('active');
    document.getElementById('startScreen').classList.add('active');
}

// ==================== GESTION DES ERREURS ====================
window.addEventListener('error', function(event) {
    console.error('ERREUR GLOBALE:', event.error);
});