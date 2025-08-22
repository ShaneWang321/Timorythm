document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const languageSelect = document.getElementById('language-select');
    
    // Set default language or load from localStorage
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    languageSelect.value = currentLang;
    
    // Load language data
    loadLanguageData(currentLang);
    
    // Language switcher
    languageSelect.addEventListener('change', function(e) {
        const selectedLang = e.target.value;
        loadLanguageData(selectedLang);
        localStorage.setItem('preferredLanguage', selectedLang);
    });
    
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                this.classList.add('active');
            } else {
                answer.style.display = 'none';
                this.classList.remove('active');
            }
        });
    });
    
    // Initialize contact form if it exists
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert(translations[currentLang]['form-error'] || 'Please fill all required fields.');
                return;
            }
            
            // Form submission simulation
            alert(translations[currentLang]['form-success'] || 'Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add sci-fi particle effect to hero section if on home page
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        createParticles();
    }
});

// Language translations
const translations = {
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-screens': 'Screens',
        'nav-support': 'Support',
        'nav-privacy': 'Privacy Policy',
        
        // Hero section
        'hero-title': '時序 (Timorythm)',
        'hero-subtitle': 'A modern SwiftUI app with a sci-fi UI designed for tracking daily tasks and time management',
        'hero-download': 'Download on App Store',
        'hero-learn-more': 'Learn More',
        
        // Features section
        'features-title': 'Key Features',
        'feature1-title': 'Time Tracking',
        'feature1-desc': 'Visualize your day with custom start/end times',
        'feature2-title': 'Task Management',
        'feature2-desc': 'Create, edit, and track tasks with priorities and deadlines',
        'feature3-title': 'Notifications',
        'feature3-desc': 'Get reminders for upcoming tasks',
        'feature4-title': 'Themes',
        'feature4-desc': 'Multiple visual themes with dynamic backgrounds that change throughout the day',
        'feature5-title': 'Multi-language Support',
        'feature5-desc': 'English, Chinese (Simplified & Traditional), Japanese, Korean, and French',
        'feature6-title': 'Customization',
        'feature6-desc': 'Personalize app appearance and behavior',
        
        // Screens section
        'screens-title': 'App Screens',
        'screen1-title': 'Visualize Your Day at a Glance',
        'screen1-desc': 'Track your progress with intuitive visual elements',
        'screen2-title': 'Organize Tasks, Boost Productivity',
        'screen2-desc': 'Manage priorities and deadlines efficiently',
        'screen3-title': 'Futuristic Themes, Immersive Experience',
        'screen3-desc': 'Choose from dynamic sci-fi visual styles',
        'screen4-title': 'Multilingual Support, Global Access',
        'screen4-desc': 'Use in your preferred language for a personalized experience',
        
        // Requirements
        'req-title': 'System Requirements',
        'req1': 'iOS 15.0+',
        
        // Footer
        'footer-copyright': '© 2025 Created by Wang Shaoen. All rights reserved.',
        
        // Support page
        'support-title': 'Support',
        'faq-title': 'Frequently Asked Questions',
        'faq1-q': 'How do I customize my day\'s start and end times?',
        'faq1-a': 'Go to Settings and adjust the "Day Start Time" and "Day End Time" options to match your schedule.',
        'faq2-q': 'How do I create a new task?',
        'faq2-a': 'Navigate to the Task List tab and tap the "+" button in the top right corner. Fill in the task details and tap "Save".',
        'faq3-q': 'How do I change the app\'s language?',
        'faq3-a': 'Go to Settings and select your preferred language from the Language options.',
        'faq4-q': 'Can I customize the visual theme?',
        'faq4-a': 'Yes, go to Settings and select your preferred theme from the Theme options.',
        'faq5-q': 'How do task reminders work?',
        'faq5-a': 'When creating or editing a task, you can set a reminder time. The app will send you a notification at the specified time.',
        
        'contact-title': 'Contact Us',
        'contact-desc': 'If you have any questions, feedback, or issues with the app, please don\'t hesitate to contact us.',
        'form-direct-link': 'If the form doesn\'t load properly, you can also',
        'form-direct-link-anchor': 'access it directly here',
        'contact-name': 'Name',
        'contact-email': 'Email',
        'contact-subject': 'Subject',
        'contact-subject-q': 'Question',
        'contact-subject-f': 'Feedback',
        'contact-subject-b': 'Bug Report',
        'contact-subject-o': 'Other',
        'contact-message': 'Message',
        'contact-submit': 'Submit',
        'form-error': 'Please fill all required fields.',
        'form-success': 'Thank you for your message! We will get back to you soon.',
        
        // Privacy page
        'privacy-title': 'Privacy Policy',
        'privacy-intro-title': 'Introduction',
        'privacy-intro-p1': 'This Privacy Policy outlines how 時序 (Timorythm) collects, uses, and protects your personal information when you use our mobile application.',
        'privacy-intro-p2': 'We are committed to ensuring that your privacy is protected. Any information you provide will only be used in accordance with this privacy statement.',
        'privacy-intro-p3': 'This policy is effective as of January 1, 2023.',
        
        'privacy-collect-title': 'Information We Collect',
        'privacy-collect-p1': '時序 (Timorythm) is designed with your privacy in mind. All data created within the app (including tasks, settings, and preferences) is stored locally on your device.',
        'privacy-collect-li1': 'Task information you create within the app',
        'privacy-collect-li2': 'App preferences and settings',
        'privacy-collect-li3': 'Usage data to improve app performance',
        'privacy-collect-p2': 'We do not collect or transmit personal information to external servers.',
        
        'privacy-use-title': 'How We Use Your Information',
        'privacy-use-p': 'The information stored locally on your device is used solely for the purpose of providing app functionality, including:',
        'privacy-use-li1': 'Displaying your tasks and time management information',
        'privacy-use-li2': 'Sending local notifications for task reminders',
        'privacy-use-li3': 'Customizing app appearance based on your preferences',
        
        'privacy-share-title': 'Sharing of Information',
        'privacy-share-p1': 'We do not share or transmit your data to third parties.',
        'privacy-share-p2': 'Your data remains on your device unless you explicitly choose to export it or back it up using your device\'s backup services (such as iCloud).',
        
        'privacy-security-title': 'Data Security',
        'privacy-security-p1': 'We are committed to ensuring that your information is secure. The app uses standard iOS security mechanisms to protect your data.',
        'privacy-security-p2': 'All app data is stored in the secure app sandbox provided by iOS.',
        
        'privacy-changes-title': 'Changes to This Policy',
        'privacy-changes-p1': 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the app.',
        'privacy-changes-p2': 'You are advised to review this Privacy Policy periodically for any changes.',
        
        'privacy-contact-title': 'Contact Us',
        'privacy-contact-p': 'If you have any questions about this Privacy Policy, please contact us through the support page.'
    },
    
    'zh-Hant': {
        // Navigation
        'nav-home': '首頁',
        'nav-features': '功能',
        'nav-screens': '畫面',
        'nav-support': '支援',
        'nav-privacy': '隱私政策',
        
        // Hero section
        'hero-title': '時序 (Timorythm)',
        'hero-subtitle': '一款具有科幻風格 UI 的現代 SwiftUI 應用程式，專為追蹤日常任務和時間管理而設計',
        'hero-download': '在 App Store 下載',
        'hero-learn-more': '了解更多',
        
        // Features section
        'features-title': '主要功能',
        'feature1-title': '時間追蹤',
        'feature1-desc': '以視覺化方式呈現您的一天，支援自定義開始/結束時間',
        'feature2-title': '任務管理',
        'feature2-desc': '創建、編輯和追蹤具有優先級和截止日期的任務',
        'feature3-title': '提醒通知',
        'feature3-desc': '獲取即將到來的任務提醒',
        'feature4-title': '主題風格',
        'feature4-desc': '多種視覺主題，隨著一天時間變化而動態變化的背景',
        'feature5-title': '多語言支援',
        'feature5-desc': '支援英文、中文（簡體和繁體）、日文、韓文和法文',
        'feature6-title': '自定義選項',
        'feature6-desc': '個性化應用程式外觀和行為',
        
        // Screens section
        'screens-title': '應用程式畫面',
        'screen1-title': '一目了然視覺化您的一天',
        'screen1-desc': '通過直觀的視覺元素追蹤您的進度',
        'screen2-title': '組織任務，提高生產力',
        'screen2-desc': '高效管理優先事項和截止日期',
        'screen3-title': '未來主題，沉浸式體驗',
        'screen3-desc': '選擇動態科幻視覺風格',
        'screen4-title': '多語言支援，全球訪問',
        'screen4-desc': '使用您偏好的語言獲得個性化體驗',
        
        // Requirements
        'req-title': '系統要求',
        'req1': 'iOS 15.0+',
        
        // Footer
        'footer-copyright': '© 2025 由王紹恩創建。保留所有權利。',

        // Support page
        'support-title': '支援',
        'faq-title': '常見問題',
        'faq1-q': '如何自定義我的一天的開始和結束時間？',
        'faq1-a': '前往設定並調整「日程開始時間」和「日程結束時間」選項以符合您的時間表。',
        'faq2-q': '如何創建新任務？',
        'faq2-a': '導航至任務列表標籤，然後點擊右上角的"+"按鈕。填寫任務詳細信息並點擊"保存"。',
        'faq3-q': '如何更改應用程式的語言？',
        'faq3-a': '前往設定並從語言選項中選擇您偏好的語言。',
        'faq4-q': '我可以自定義視覺主題嗎？',
        'faq4-a': '是的，前往設定並從主題選項中選擇您偏好的主題。',
        'faq5-q': '任務提醒如何工作？',
        'faq5-a': '創建或編輯任務時，您可以設置提醒時間。應用程式將在指定時間向您發送通知。',
        
        'contact-title': '聯繫我們',
        'contact-desc': '如果您對應用程式有任何問題、反饋或遇到問題，請隨時與我們聯繫。',
        'form-direct-link': '如果表單無法正常載入，您也可以',
        'form-direct-link-anchor': '直接在此處訪問',
        'contact-name': '姓名',
        'contact-email': '電子郵件',
        'contact-subject': '主題',
        'contact-subject-q': '問題',
        'contact-subject-f': '反饋',
        'contact-subject-b': '錯誤報告',
        'contact-subject-o': '其他',
        'contact-message': '訊息',
        'contact-submit': '提交',
        'form-error': '請填寫所有必填欄位。',
        'form-success': '感謝您的訊息！我們將盡快回覆您。',

        // Privacy page
        'privacy-title': '隱私政策',
        'privacy-intro-title': '簡介',
        'privacy-intro-p1': '本隱私政策概述了時序 (Timorythm) 在您使用我們的移動應用程式時如何收集、使用和保護您的個人信息。',
        'privacy-intro-p2': '我們致力於確保您的隱私受到保護。您提供的任何信息只會按照本隱私聲明使用。',
        'privacy-intro-p3': '此政策自2023年1月1日起生效。',
        
        'privacy-collect-title': '我們收集的信息',
        'privacy-collect-p1': '時序 (Timorythm) 在設計時考慮了您的隱私。應用程式內創建的所有數據（包括任務、設置和偏好）都存儲在您的設備上。',
        'privacy-collect-li1': '您在應用程式中創建的任務信息',
        'privacy-collect-li2': '應用程式偏好和設置',
        'privacy-collect-li3': '用於改進應用程式性能的使用數據',
        'privacy-collect-p2': '我們不收集或傳輸個人信息到外部服務器。',
        
        'privacy-use-title': '我們如何使用您的信息',
        'privacy-use-p': '存儲在您設備上的信息僅用於提供應用程式功能，包括：',
        'privacy-use-li1': '顯示您的任務和時間管理信息',
        'privacy-use-li2': '為任務提醒發送本地通知',
        'privacy-use-li3': '根據您的偏好自定義應用程式外觀',
        
        'privacy-share-title': '信息分享',
        'privacy-share-p1': '我們不與第三方共享或傳輸您的數據。',
        'privacy-share-p2': '您的數據保留在您的設備上，除非您明確選擇導出或使用設備的備份服務（如iCloud）進行備份。',
        
        'privacy-security-title': '數據安全',
        'privacy-security-p1': '我們致力於確保您的信息安全。該應用程式使用標準iOS安全機制來保護您的數據。',
        'privacy-security-p2': '所有應用程式數據都存儲在iOS提供的安全應用沙盒中。',
        
        'privacy-changes-title': '政策變更',
        'privacy-changes-p1': '我們可能會不時更新我們的隱私政策。我們將通過在此頁面上發布新的隱私政策並更新應用程式來通知您任何變更。',
        'privacy-changes-p2': '建議您定期查看本隱私政策以了解任何變更。',
        
        'privacy-contact-title': '聯繫我們',
        'privacy-contact-p': '如果您對本隱私政策有任何疑問，請通過支援頁面與我們聯繫。'
    },
    
    // Add more languages as needed (zh-Hans, ja, ko, fr)
};

// Function to load language data
function loadLanguageData(lang) {
    // Default to English if the selected language is not available
    const data = translations[lang] || translations['en'];
    
    // Update all elements with lang class
    const elements = document.querySelectorAll('.lang');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (data[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = data[key];
            } else {
                el.textContent = data[key];
            }
        }
    });
}

// Sci-fi particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.overflow = 'hidden';
    particleContainer.style.zIndex = '1';
    
    hero.style.position = 'relative';
    hero.insertBefore(particleContainer, hero.firstChild);
    
    // Add hero content z-index to appear above particles
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.position = 'relative';
        heroContent.style.zIndex = '2';
    }
    
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.position = 'relative';
        heroImage.style.zIndex = '2';
    }
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    
    // Random properties
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const opacity = Math.random() * 0.5 + 0.1;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 5;
    
    // Apply styles
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = 'rgba(108, 194, 189, ' + opacity + ')';
    particle.style.boxShadow = '0 0 10px rgba(108, 194, 189, 0.8)';
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Animation
    particle.style.animation = `float ${duration}s infinite`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.opacity = '0';
    
    // Create and append keyframe animation
    const keyframes = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: ${opacity};
        }
        90% {
            opacity: ${opacity};
        }
        100% {
            transform: translateY(-${Math.random() * 100 + 100}px) translateX(${(Math.random() - 0.5) * 100}px);
            opacity: 0;
        }
    }`;
    
    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
    
    container.appendChild(particle);
} 