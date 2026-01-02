// translations.js - LearningHub Translations

const translations = {
    // ==================== INDEX / LOGIN ====================
    'site-title': { fr: 'LearningHub - Connexion', en: 'LearningHub - Login' },
    'site-subtitle': { fr: 'Plateforme de formation en ligne', en: 'Online Learning Platform' },
    'tab-login': { fr: 'Connexion', en: 'Login' },
    'tab-register': { fr: 'Inscription', en: 'Register' },
    'label-email': { fr: 'Email', en: 'Email' },
    'label-password': { fr: 'Mot de passe', en: 'Password' },
    'label-fullname': { fr: 'Nom complet', en: 'Full Name' },
    'placeholder-email': { fr: 'votre@email.com', en: 'your@email.com' },
    'placeholder-password': { fr: '••••••••', en: '••••••••' },
    'placeholder-name': { fr: 'Jean Dupont', en: 'John Doe' },
    'placeholder-password-min': { fr: 'Minimum 6 caractères', en: 'Minimum 6 characters' },
    'btn-login': { fr: 'Se connecter', en: 'Sign In' },
    'btn-register': { fr: 'Créer mon compte', en: 'Create Account' },
    'link-forgot': { fr: 'Mot de passe oublié ?', en: 'Forgot password?' },
    'loading-login': { fr: 'Connexion en cours...', en: 'Signing in...' },
    
    // Messages
    'msg-fill-fields': { fr: 'Veuillez remplir tous les champs', en: 'Please fill in all fields' },
    'msg-login-success': { fr: 'Connexion réussie !', en: 'Login successful!' },
    'msg-login-error': { fr: 'Erreur de connexion', en: 'Login error' },
    'msg-user-not-found': { fr: 'Aucun compte trouvé avec cet email', en: 'No account found with this email' },
    'msg-wrong-password': { fr: 'Mot de passe incorrect', en: 'Incorrect password' },
    'msg-invalid-email': { fr: 'Email invalide', en: 'Invalid email' },
    'msg-too-many-requests': { fr: 'Trop de tentatives, réessayez plus tard', en: 'Too many attempts, try again later' },
    'msg-invalid-credential': { fr: 'Email ou mot de passe incorrect', en: 'Incorrect email or password' },
    'msg-password-min': { fr: 'Le mot de passe doit contenir au moins 6 caractères', en: 'Password must be at least 6 characters' },
    'msg-register-success': { fr: 'Compte créé avec succès !', en: 'Account created successfully!' },
    'msg-register-error': { fr: "Erreur lors de l'inscription", en: 'Registration error' },
    'msg-email-in-use': { fr: 'Cet email est déjà utilisé', en: 'This email is already in use' },
    'msg-weak-password': { fr: 'Mot de passe trop faible', en: 'Password too weak' },
    'msg-enter-email-reset': { fr: 'Entrez votre email pour réinitialiser votre mot de passe', en: 'Enter your email to reset your password' },
    'msg-reset-sent': { fr: 'Email de réinitialisation envoyé !', en: 'Password reset email sent!' },
    'msg-reset-error': { fr: 'Erreur : vérifiez votre email', en: 'Error: check your email' },
    
    // ==================== STUDENT DASHBOARD ====================
    'page-title-student': { fr: 'Mon Espace - LearningHub', en: 'My Space - LearningHub' },
    'welcome': { fr: 'Bienvenue', en: 'Welcome' },
    'welcome-message': { fr: 'Continuez votre apprentissage et atteignez vos objectifs.', en: 'Continue your learning and achieve your goals.' },
    'btn-logout': { fr: 'Déconnexion', en: 'Logout' },
    'loading-user': { fr: 'Chargement...', en: 'Loading...' },
    
    // Stats
    'stat-assigned': { fr: 'Cours assignés', en: 'Assigned Courses' },
    'stat-completed': { fr: 'Cours terminés', en: 'Completed Courses' },
    'stat-progress': { fr: 'Progression globale', en: 'Overall Progress' },
    'stat-certificates': { fr: 'Certificats obtenus', en: 'Certificates Earned' },
    
    // Tabs
    'tab-my-courses': { fr: 'Mes Cours', en: 'My Courses' },
    'tab-my-programs': { fr: 'Mes Programmes', en: 'My Programs' },
    
    // Loading
    'loading-courses': { fr: 'Chargement de vos formations...', en: 'Loading your courses...' },
    
    // Empty states
    'no-courses-title': { fr: 'Aucun cours assigné', en: 'No courses assigned' },
    'no-courses-message': { fr: 'Votre formateur vous assignera bientôt des cours.', en: 'Your instructor will assign courses soon.' },
    'no-programs-title': { fr: 'Aucun programme assigné', en: 'No programs assigned' },
    'no-programs-message': { fr: 'Votre formateur vous assignera bientôt des programmes.', en: 'Your instructor will assign programs soon.' },
    
    // Course cards
    'progression': { fr: 'Progression', en: 'Progress' },
    'btn-review': { fr: '✅ Revoir le cours', en: '✅ Review Course' },
    'btn-continue': { fr: '▶️ Continuer', en: '▶️ Continue' },
    'btn-start': { fr: '▶️ Commencer', en: '▶️ Start' },
    'certificate': { fr: 'Certificat', en: 'Certificate' },
    'all-levels': { fr: 'Tous niveaux', en: 'All Levels' },
    'training': { fr: 'Formation', en: 'Training' },
    
    // Formats
    'format-elearning': { fr: '💻 E-learning', en: '💻 E-learning' },
    'format-presentiel': { fr: '🏢 Présentiel', en: '🏢 In-Person' },
    'format-distanciel': { fr: '🎥 Distanciel', en: '🎥 Remote' },
    'format-hybride': { fr: '🔄 Hybride', en: '🔄 Hybrid' },
    
    // Programs
    'program-courses': { fr: 'Cours du programme', en: 'Program Courses' },
    'program-documents': { fr: 'Documents à consulter', en: 'Documents to Review' },
    'courses': { fr: 'cours', en: 'courses' },
    'documents': { fr: 'documents', en: 'documents' },
    'completed-of': { fr: 'terminés', en: 'completed' },
    'percent-completed': { fr: 'complété', en: 'completed' },
    'validated': { fr: 'Validé', en: 'Validated' },
    'to-validate': { fr: 'À valider', en: 'To validate' },
    'free-consultation': { fr: 'Consultation libre', en: 'Free consultation' },
    
    // Document modal
    'doc-description': { fr: '📝 Description', en: '📝 Description' },
    'doc-actions': { fr: '📎 Actions', en: '📎 Actions' },
    'doc-validation': { fr: '✅ Validation', en: '✅ Validation' },
    'btn-view': { fr: '👁️ Visualiser', en: '👁️ View' },
    'btn-download': { fr: '⬇️ Télécharger', en: '⬇️ Download' },
    'no-description': { fr: 'Aucune description disponible.', en: 'No description available.' },
    'no-validation-required': { fr: 'Aucune validation requise pour ce document.', en: 'No validation required for this document.' },
    'acceptance-text': { fr: "J'ai lu, compris et j'accepte de me conformer à ce document.", en: 'I have read, understood and agree to comply with this document.' },
    'document-accepted': { fr: '✅ Document accepté', en: '✅ Document accepted' },
    
    // ==================== INSTRUCTOR DASHBOARD ====================
    'page-title-instructor': { fr: 'Tableau de bord - Formateur', en: 'Dashboard - Instructor' },
    'instructor-welcome': { fr: 'Bienvenue', en: 'Welcome' },
    'instructor-subtitle': { fr: 'Gérez vos formations et suivez vos apprenants', en: 'Manage your courses and track your learners' },
    
    // Menu
    'menu-courses': { fr: '📚 Cours', en: '📚 Courses' },
    'menu-programs': { fr: '🎓 Programmes', en: '🎓 Programs' },
    'menu-users': { fr: '👥 Utilisateurs', en: '👥 Users' },
    'menu-documents': { fr: '📄 Documents', en: '📄 Documents' },
    'menu-categories': { fr: '📁 Catégories', en: '📁 Categories' },
    'menu-settings': { fr: '⚙️ Paramètres', en: '⚙️ Settings' },
    
    // Stats instructor
    'total-courses': { fr: 'Total cours', en: 'Total Courses' },
    'total-students': { fr: 'Apprenants', en: 'Learners' },
    'total-programs': { fr: 'Programmes', en: 'Programs' },
    'completion-rate': { fr: 'Taux de complétion', en: 'Completion Rate' },
    
    // ==================== DOCUMENTS MANAGEMENT ====================
    'page-title-documents': { fr: 'Gestion des Documents - LearningHub', en: 'Documents Management - LearningHub' },
    'documents-title': { fr: '📄 Gestion des Documents', en: '📄 Documents Management' },
    'btn-back': { fr: '← Retour', en: '← Back' },
    'tab-create': { fr: 'Créer un document', en: 'Create Document' },
    'tab-my-documents': { fr: 'Mes documents', en: 'My Documents' },
    'new-document': { fr: '📝 Nouveau document', en: '📝 New Document' },
    'document-name': { fr: 'Nom du document *', en: 'Document Name *' },
    'document-name-placeholder': { fr: 'Ex: Politique de confidentialité', en: 'Ex: Privacy Policy' },
    'document-summary': { fr: 'Résumé', en: 'Summary' },
    'document-summary-placeholder': { fr: 'Décrivez brièvement le contenu du document...', en: 'Briefly describe the document content...' },
    'document-file': { fr: 'Fichier PDF *', en: 'PDF File *' },
    'drag-pdf': { fr: 'Glissez votre PDF ici', en: 'Drag your PDF here' },
    'or-click': { fr: 'ou cliquez pour sélectionner un fichier', en: 'or click to select a file' },
    'category': { fr: 'Catégorie', en: 'Category' },
    'cat-policy': { fr: 'Politique / Règlement', en: 'Policy / Rules' },
    'cat-guide': { fr: 'Guide / Manuel', en: 'Guide / Manual' },
    'cat-form': { fr: 'Formulaire', en: 'Form' },
    'cat-certificate': { fr: 'Attestation', en: 'Certificate' },
    'cat-other': { fr: 'Autre', en: 'Other' },
    'requires-acceptance': { fr: "L'étudiant doit accepter ce document (case \"J'ai lu et j'accepte\")", en: 'Student must accept this document ("I have read and accept" checkbox)' },
    'btn-save-document': { fr: '💾 Enregistrer le document', en: '💾 Save Document' },
    'upload-progress': { fr: 'Upload en cours...', en: 'Uploading...' },
    'document-created': { fr: 'Document créé avec succès !', en: 'Document created successfully!' },
    'document-updated': { fr: 'Document mis à jour !', en: 'Document updated!' },
    'document-deleted': { fr: 'Document supprimé', en: 'Document deleted' },
    'no-documents': { fr: 'Aucun document', en: 'No documents' },
    'create-first-document': { fr: 'Créez votre premier document.', en: 'Create your first document.' },
    'no-summary': { fr: 'Aucun résumé', en: 'No summary' },
    'edit-document': { fr: '✏️ Modifier le document', en: '✏️ Edit Document' },
    'btn-cancel': { fr: 'Annuler', en: 'Cancel' },
    'btn-save': { fr: '💾 Enregistrer', en: '💾 Save' },
    'confirm-delete': { fr: 'Supprimer ce document ?', en: 'Delete this document?' },
    'auth-checking': { fr: '⏳ Vérification de la connexion...', en: '⏳ Checking connection...' },
    'auth-required': { fr: '⚠️ Vous devez être connecté pour gérer les documents.', en: '⚠️ You must be logged in to manage documents.' },
    'connect': { fr: 'Se connecter', en: 'Sign In' },
    
    // ==================== PROGRAMS ====================
    'page-title-programs': { fr: 'Programmes - LearningHub', en: 'Programs - LearningHub' },
    'programs-title': { fr: '🎓 Programmes de Formation', en: '🎓 Training Programs' },
    'tab-my-programs-list': { fr: '📋 Mes Programmes', en: '📋 My Programs' },
    'tab-create-program': { fr: '➕ Créer un Programme', en: '➕ Create Program' },
    'program-info': { fr: '📋 Informations du programme', en: '📋 Program Information' },
    'program-title': { fr: 'Titre du programme *', en: 'Program Title *' },
    'program-title-placeholder': { fr: 'Ex: Parcours Compliance 2025', en: 'Ex: Compliance Path 2025' },
    'program-description': { fr: 'Description', en: 'Description' },
    'program-description-placeholder': { fr: 'Décrivez ce programme...', en: 'Describe this program...' },
    'deadline-date': { fr: '📅 Date limite (deadline)', en: '📅 Deadline Date' },
    'deadline-hint': { fr: 'Date avant laquelle les étudiants doivent terminer', en: 'Date by which students must finish' },
    'deadline-time': { fr: '⏰ Heure limite', en: '⏰ Deadline Time' },
    'included-courses': { fr: '📚 Cours inclus', en: '📚 Included Courses' },
    'select-courses': { fr: 'Sélectionnez les cours à inclure :', en: 'Select courses to include:' },
    'associated-documents': { fr: '📄 Documents associés', en: '📄 Associated Documents' },
    'select-documents': { fr: "Sélectionnez les documents que l'étudiant devra consulter et accepter :", en: 'Select documents that students must review and accept:' },
    'selected-courses': { fr: '📋 Cours sélectionnés :', en: '📋 Selected Courses:' },
    'selected-documents': { fr: '📄 Documents sélectionnés :', en: '📄 Selected Documents:' },
    'btn-draft': { fr: '💾 Brouillon', en: '💾 Draft' },
    'btn-publish': { fr: '🚀 Publier', en: '🚀 Publish' },
    'no-programs': { fr: 'Aucun programme', en: 'No programs' },
    'create-first-program': { fr: 'Créez votre premier programme', en: 'Create your first program' },
    'status-published': { fr: '✓ Publié', en: '✓ Published' },
    'status-draft': { fr: '⏳ Brouillon', en: '⏳ Draft' },
    'passed': { fr: '(passée)', en: '(passed)' },
    'no-published-courses': { fr: 'Aucun cours publié', en: 'No published courses' },
    'no-documents-available': { fr: 'Aucun document disponible.', en: 'No documents available.' },
    'create-document-link': { fr: 'Créer un document', en: 'Create a document' },
    'acceptance-required': { fr: '✅ Acceptation requise', en: '✅ Acceptance required' },
    'title-required': { fr: '❌ Titre requis', en: '❌ Title required' },
    'select-one-course': { fr: '❌ Sélectionnez au moins un cours', en: '❌ Select at least one course' },
    'draft-saved': { fr: '✅ Brouillon enregistré !', en: '✅ Draft saved!' },
    'program-published': { fr: '✅ Programme publié !', en: '✅ Program published!' },
    'program-deleted': { fr: '✅ Programme supprimé', en: '✅ Program deleted' },
    'confirm-delete-program': { fr: 'Supprimer ce programme ?', en: 'Delete this program?' },
    'modules': { fr: 'modules', en: 'modules' },
    
    // ==================== USERS MANAGEMENT ====================
    'page-title-users': { fr: 'Gestion des Utilisateurs', en: 'User Management' },
    'users-title': { fr: '👥 Gestion des Utilisateurs', en: '👥 User Management' },
    'tab-students': { fr: '🎓 Étudiants', en: '🎓 Students' },
    'tab-add-student': { fr: '➕ Ajouter', en: '➕ Add' },
    'search-placeholder': { fr: 'Rechercher un étudiant...', en: 'Search for a student...' },
    'add-student': { fr: '➕ Ajouter un étudiant', en: '➕ Add a Student' },
    'student-lastname': { fr: 'Nom', en: 'Last Name' },
    'student-firstname': { fr: 'Prénom', en: 'First Name' },
    'student-email': { fr: 'Email', en: 'Email' },
    'btn-add-student': { fr: '➕ Ajouter l\'étudiant', en: '➕ Add Student' },
    'no-students': { fr: 'Aucun étudiant', en: 'No students' },
    'add-first-student': { fr: 'Ajoutez votre premier étudiant', en: 'Add your first student' },
    'student-added': { fr: '✅ Étudiant ajouté !', en: '✅ Student added!' },
    'student-deleted': { fr: 'Étudiant supprimé', en: 'Student deleted' },
    'confirm-delete-student': { fr: 'Supprimer cet étudiant ?', en: 'Delete this student?' },
    'assign-courses': { fr: '📚 Assigner des cours', en: '📚 Assign Courses' },
    'assign-programs': { fr: '🎓 Assigner des programmes', en: '🎓 Assign Programs' },
    'no-courses-to-assign': { fr: 'Aucun cours publié à assigner', en: 'No published courses to assign' },
    'no-programs-to-assign': { fr: 'Aucun programme publié à assigner', en: 'No published programs to assign' },
    'assignments-saved': { fr: '✅ Assignations enregistrées !', en: '✅ Assignments saved!' },
    
    // ==================== COURSES MANAGEMENT ====================
    'page-title-courses': { fr: 'Gestion des Cours', en: 'Course Management' },
    'courses-title': { fr: '📚 Mes Cours', en: '📚 My Courses' },
    'btn-create-course': { fr: '➕ Créer un cours', en: '➕ Create Course' },
    'no-courses-created': { fr: 'Aucun cours créé', en: 'No courses created' },
    'create-first-course': { fr: 'Créez votre premier cours', en: 'Create your first course' },
    
    // ==================== VIEW COURSE ====================
    'page-title-view-course': { fr: 'Cours - LearningHub', en: 'Course - LearningHub' },
    'course-content': { fr: 'Contenu du cours', en: 'Course Content' },
    'quiz': { fr: 'Quiz', en: 'Quiz' },
    'question': { fr: 'Question', en: 'Question' },
    'of': { fr: 'sur', en: 'of' },
    'btn-validate': { fr: 'Valider', en: 'Validate' },
    'btn-next': { fr: 'Suivant', en: 'Next' },
    'btn-previous': { fr: 'Précédent', en: 'Previous' },
    'btn-finish': { fr: 'Terminer', en: 'Finish' },
    'correct-answer': { fr: 'Bonne réponse !', en: 'Correct answer!' },
    'wrong-answer': { fr: 'Mauvaise réponse', en: 'Wrong answer' },
    'quiz-result': { fr: 'Résultat du quiz', en: 'Quiz Result' },
    'your-score': { fr: 'Votre score', en: 'Your score' },
    'min-score-required': { fr: 'Score minimum requis', en: 'Minimum score required' },
    'congratulations': { fr: 'Félicitations !', en: 'Congratulations!' },
    'course-completed': { fr: 'Vous avez terminé ce cours !', en: 'You have completed this course!' },
    'download-certificate': { fr: '📜 Télécharger mon certificat', en: '📜 Download my certificate' },
    'time-spent': { fr: 'Temps passé', en: 'Time spent' },
    'required-duration': { fr: 'Durée requise', en: 'Required duration' },
    'min-time-not-reached': { fr: 'Temps minimum non atteint', en: 'Minimum time not reached' },
    'min-remaining': { fr: 'min restantes', en: 'min remaining' },
    
    // ==================== SETTINGS ====================
    'page-title-settings': { fr: 'Paramètres', en: 'Settings' },
    'settings-title': { fr: '⚙️ Paramètres', en: '⚙️ Settings' },
    'banner-settings': { fr: 'Bannière latérale', en: 'Sidebar Banner' },
    'banner-upload': { fr: 'Télécharger une image', en: 'Upload an image' },
    'banner-width': { fr: 'Largeur (px)', en: 'Width (px)' },
    'btn-save-banner': { fr: 'Enregistrer la bannière', en: 'Save Banner' },
    
    // ==================== CATEGORIES ====================
    'page-title-categories': { fr: 'Catégories', en: 'Categories' },
    'categories-title': { fr: '📁 Gestion des Catégories', en: '📁 Category Management' },
    'add-category': { fr: 'Ajouter une catégorie', en: 'Add a category' },
    'category-name': { fr: 'Nom de la catégorie', en: 'Category name' },
    'btn-add-category': { fr: '➕ Ajouter', en: '➕ Add' },
    'no-categories': { fr: 'Aucune catégorie', en: 'No categories' },
    'category-added': { fr: 'Catégorie ajoutée', en: 'Category added' },
    'category-deleted': { fr: 'Catégorie supprimée', en: 'Category deleted' },
    'confirm-delete-category': { fr: 'Supprimer cette catégorie ?', en: 'Delete this category?' },
    
    // ==================== COMMON ====================
    'error': { fr: 'Erreur', en: 'Error' },
    'success': { fr: 'Succès', en: 'Success' },
    'loading': { fr: 'Chargement...', en: 'Loading...' },
    'save': { fr: 'Enregistrer', en: 'Save' },
    'cancel': { fr: 'Annuler', en: 'Cancel' },
    'delete': { fr: 'Supprimer', en: 'Delete' },
    'edit': { fr: 'Modifier', en: 'Edit' },
    'view': { fr: 'Voir', en: 'View' },
    'close': { fr: 'Fermer', en: 'Close' },
    'yes': { fr: 'Oui', en: 'Yes' },
    'no': { fr: 'Non', en: 'No' },
    'or': { fr: 'ou', en: 'or' },
    'and': { fr: 'et', en: 'and' },
    'minutes': { fr: 'minutes', en: 'minutes' },
    'hours': { fr: 'heures', en: 'hours' },
    'day': { fr: 'jour', en: 'day' },
    'days': { fr: 'jours', en: 'days' },
};

// Get current language from localStorage (default: 'fr')
function getCurrentLang() {
    return localStorage.getItem('lang') || 'fr';
}

// Set language
function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations();
    updateLangSelector();
}

// Get translation
function t(key) {
    const lang = getCurrentLang();
    if (translations[key]) {
        return translations[key][lang] || translations[key]['fr'] || key;
    }
    return key;
}

// Apply translations to page
function applyTranslations() {
    const lang = getCurrentLang();
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.textContent = translations[key][lang];
        }
    });
    
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            el.placeholder = translations[key][lang];
        }
    });
    
    // Update all elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[key]) {
            el.title = translations[key][lang];
        }
    });
    
    // Update page title
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
        const key = titleEl.getAttribute('data-i18n');
        if (translations[key]) {
            document.title = translations[key][lang];
        }
    }
    
    // Update html lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
}

// Update language selector UI
function updateLangSelector() {
    const lang = getCurrentLang();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateLangSelector();
});

// Export for use in other scripts
window.translations = translations;
window.t = t;
window.getCurrentLang = getCurrentLang;
window.setLang = setLang;
window.applyTranslations = applyTranslations;
