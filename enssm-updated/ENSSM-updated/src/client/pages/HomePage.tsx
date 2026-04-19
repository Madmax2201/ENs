import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, MapPin, Mail, Clock, ChevronDown, Award, Heart, Globe, Menu, X, Play, ArrowRight, Sparkles, Target, Lightbulb, HandHeart, Building2, Calendar, CheckCircle2, Facebook, ExternalLink, Languages, Rocket, Building, Brain, Cog, Library } from 'lucide-react';
import { Button } from '@/client/components/ui/Button';

type Language = 'en' | 'ar';

const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      programs: 'Programs',
      wajihat: 'Centers',
      gallery: 'Gallery',
      admission: 'Admission',
      contact: 'Contact',
      applyNow: 'Apply Now',
    },
    // Hero
    hero: {
      badge: 'First Institution of its Kind in Africa & Arab World',
      title1: 'Higher School for',
      title2: 'Teachers of the Deaf',
      arabicName: 'المدرسة العليا لأساتذة الصم والبكم',
      description: 'Training specialized educators to empower deaf and hearing-impaired students through quality secondary education in Algeria.',
      explorePrograms: 'Explore Programs',
      viewGallery: 'View Gallery',
    },
    // Stats
    stats: {
      studentsEnrolled: 'Students Enrolled',
      specializations: 'Specializations',
      masterProgram: 'Master Program',
      firstGraduates: 'First Graduates',
    },
    // About
    about: {
      badge: 'About Our Institution',
      title1: 'Pioneering Inclusive',
      title2: 'Education in Algeria',
      description: 'Inaugurated on October 16, 2022, we are committed to training the next generation of specialized educators for students with hearing impairments.',
      missionTitle: 'Our Mission',
      missionText1: 'We prepare secondary education instructors who specialize in teaching students with special needs and abilities, serving the national education sector and other sectors as needed.',
      missionText2: 'Our institution provides high-level training in multiple specializations, offering adapted quality education for social and economic integration of deaf and hearing-impaired individuals.',
      keyTrainingAreas: 'Key Training Areas',
      specializedTraining: 'Specialized Training',
      specializedTrainingDesc: "Master's program focused on cutting-edge teaching methodologies for deaf and hearing-impaired students.",
      inclusiveEducation: 'Inclusive Education',
      inclusiveEducationDesc: 'Committed to providing quality education adapted for social and economic integration of all students.',
      firstInAfrica: 'First in Africa & Arab World',
      firstInAfricaDesc: 'Pioneer institution in specialized teacher training for the deaf community across the region.',
      orthophony: 'Orthophony (Speech Therapy)',
      orthophonyDesc: 'Advanced techniques in speech rehabilitation',
      hearingDevices: 'Hearing Devices Technology',
      hearingDevicesDesc: 'Modern hearing aid and cochlear implant training',
      entMedicine: 'ENT Medicine Basics',
      entMedicineDesc: 'Understanding ear, nose, and throat conditions',
      signLanguage: 'Sign Language Pedagogy',
      signLanguageDesc: 'Teaching methodologies using sign language',
    },
    // Timeline
    timeline: {
      badge: 'Our Journey',
      title: 'Milestones & Achievements',
      presidential: 'Presidential Decision',
      presidentialDesc: 'President Abdelmadjid Tebboune decides to create the Higher School for Teachers of the Deaf and Mute',
      inauguration: 'School Inauguration',
      inaugurationDesc: 'Official opening by Minister of Higher Education',
      firstYear: 'First Academic Year',
      firstYearDesc: '400 students enrolled in 14 specializations',
      firstGraduation: 'First Graduation',
      firstGraduationDesc: '292 specialized teachers graduated',
      expansion: 'Expansion',
      expansionDesc: "429 new positions announced for Master's program",
      newSeats: 'New Enrollment',
      newSeatsDesc: 'Opening 420 new seats for the program',
    },
    // Programs
    programs: {
      badge: 'Academic Programs',
      title1: '14 Specialized',
      title2: 'Study Programs',
      description: "Our Master's program combines traditional academic subjects with cutting-edge training in deaf education methodologies.",
      mastersProgram: "Master's Program",
      mastersProgramDesc: 'Our comprehensive two-year program equips future teachers with all the skills needed to effectively educate deaf and hearing-impaired students.',
      twoYear: '2-year intensive training',
      practical: 'Practical teaching experience',
      medical: 'Specialized medical training',
      career: 'Career placement support',
      faculty: 'Expert faculty guidance',
      facilities: 'Modern facilities',
    },
    // Gallery
    gallery: {
      badge: 'Campus Life',
      title1: 'Life at',
      title2: 'ENS-SM',
      campusGallery: 'Campus Gallery',
    },
    // Wajihat (Centers)
    wajihat: {
      badge: 'Our Centers',
      title1: 'Innovation &',
      title2: 'Excellence Hubs',
      description: 'Discover our specialized centers dedicated to fostering entrepreneurship, innovation, and cultural development within our institution.',
      director: 'Director',
      achievements: 'Key Achievements',
      entrepreneurship: 'House of Entrepreneurship',
      entrepreneurshipDesc: 'Fostering entrepreneurial mindset and startup culture among students, providing mentorship, resources, and networking opportunities for aspiring entrepreneurs.',
      entrepreneurshipAchievements: ['Launched 15+ student startups', 'Hosted 20+ entrepreneurship workshops', 'Established partnerships with local incubators'],
      incubator: 'Business Incubator',
      incubatorDesc: 'Supporting innovative business ideas from concept to market, offering workspace, funding guidance, and expert mentorship to transform ideas into successful ventures.',
      incubatorAchievements: ['Incubated 10+ promising projects', 'Secured funding for 5 startups', 'Created 30+ job opportunities'],
      ai: 'Artificial Intelligence House',
      aiDesc: 'Advancing AI research and applications in deaf education, developing cutting-edge assistive technologies and smart learning solutions for hearing-impaired students.',
      aiAchievements: ['Developed AI-powered sign language tools', 'Published 8 research papers', 'Trained 100+ students in AI fundamentals'],
      tisc: 'Technology & Innovation Support Center',
      tiscDesc: 'Providing technical support and innovation resources, helping students and faculty leverage technology for enhanced learning and research outcomes.',
      tiscAchievements: ['Filed 3 patent applications', 'Established tech transfer programs', 'Supported 50+ innovation projects'],
      cultural: 'Cultural & Scientific Centers',
      culturalDesc: 'Promoting cultural exchange and scientific collaboration, organizing events, exhibitions, and programs that celebrate diversity and advance scientific knowledge.',
      culturalAchievements: ['Organized 25+ cultural events', 'Hosted international conferences', 'Established academic partnerships'],
    },
    // Admission
    admission: {
      badge: 'Join Us',
      title1: 'Start Your Journey',
      title2: 'Today',
      description: "Join our national competition to become part of Algeria's pioneering institution for training teachers of deaf and hearing-impaired students.",
      processTitle: 'Admission Process (2022-2026)',
      step1: 'National Competition',
      step1Desc: 'Entry through annual national competition by Ministry of Higher Education',
      step2: 'Application Submission',
      step2Desc: 'Submit required documents during the announced registration period',
      step3: 'Selection Process',
      step3Desc: 'Candidates selected based on academic merit and competition results',
      step4: 'Enrollment',
      step4Desc: "Successful candidates enroll in the 2-year Master's program",
      requirementsTitle: 'Requirements',
      req1: "Bachelor's degree (License) in a relevant field",
      req2: 'Open door for international students (Arabian and African)',
      req3: 'Pass the national entrance competition',
      req4: 'Commitment to teaching in national education sector',
      req5: 'Good physical health',
      competitionOpen: '2025 Competition Open',
      positions: '429 Positions',
      availableFor: "Available for Master's Program",
    },
    // Contact
    contact: {
      badge: 'Get in Touch',
      title: 'Contact Us',
      description: "Have questions? We're here to help you start your journey in specialized education.",
      visitUs: 'Visit Us',
      followUs: 'Follow Us',
      ministry: 'Ministry',
      visitCampus: 'Visit Our Campus',
      campusLocation: 'Located in the heart of Beni Messous, Algiers',
      openInMaps: 'Open in Google Maps',
    },
    // Footer
    footer: {
      subtitle: 'Higher School for Teachers of Deaf and Mute',
      description: 'Training specialized educators for a more inclusive future. First institution of its kind in Africa and the Arab World.',
      quickLinks: 'Quick Links',
      officialLinks: 'Official Links',
      ministryLink: 'Ministry of Higher Education',
      facebookLink: 'Official Facebook Page',
      platformsLink: 'MESRS Platforms',
      rights: 'All rights reserved.',
    },
  },
  ar: {
    // Navigation
    nav: {
      about: 'عن المدرسة',
      programs: 'البرامج',
      wajihat: 'الواجهات',
      gallery: 'المعرض',
      admission: 'القبول',
      contact: 'اتصل بنا',
      applyNow: 'قدم الآن',
    },
    // Hero
    hero: {
      badge: 'أول مؤسسة من نوعها في أفريقيا والعالم العربي',
      title1: 'المدرسة العليا',
      title2: 'لأساتذة الصم',
      arabicName: 'المدرسة العليا لأساتذة الصم والبكم',
      description: 'تدريب المعلمين المتخصصين لتمكين الطلاب الصم وضعاف السمع من خلال التعليم الثانوي الجيد في الجزائر.',
      explorePrograms: 'استكشف البرامج',
      viewGallery: 'شاهد المعرض',
    },
    // Stats
    stats: {
      studentsEnrolled: 'طالب مسجل',
      specializations: 'تخصص',
      masterProgram: 'برنامج ماستر',
      firstGraduates: 'أول دفعة خريجين',
    },
    // About
    about: {
      badge: 'عن مؤسستنا',
      title1: 'الريادة في التعليم',
      title2: 'الشامل في الجزائر',
      description: 'تم افتتاحها في 16 أكتوبر 2022، ونحن ملتزمون بتدريب الجيل القادم من المعلمين المتخصصين للطلاب ذوي الإعاقة السمعية.',
      missionTitle: 'مهمتنا',
      missionText1: 'نقوم بإعداد معلمي التعليم الثانوي المتخصصين في تدريس الطلاب ذوي الاحتياجات والقدرات الخاصة، لخدمة قطاع التعليم الوطني والقطاعات الأخرى حسب الحاجة.',
      missionText2: 'توفر مؤسستنا تدريباً عالي المستوى في تخصصات متعددة، مقدمة تعليماً جيداً مكيفاً للاندماج الاجتماعي والاقتصادي للصم وضعاف السمع.',
      keyTrainingAreas: 'مجالات التدريب الرئيسية',
      specializedTraining: 'تدريب متخصص',
      specializedTrainingDesc: 'برنامج ماستر يركز على أحدث منهجيات التدريس للطلاب الصم وضعاف السمع.',
      inclusiveEducation: 'التعليم الشامل',
      inclusiveEducationDesc: 'ملتزمون بتوفير تعليم جيد مكيف للاندماج الاجتماعي والاقتصادي لجميع الطلاب.',
      firstInAfrica: 'الأولى في أفريقيا والعالم العربي',
      firstInAfricaDesc: 'مؤسسة رائدة في تدريب المعلمين المتخصصين لمجتمع الصم في المنطقة.',
      orthophony: 'تقويم النطق',
      orthophonyDesc: 'تقنيات متقدمة في إعادة تأهيل النطق',
      hearingDevices: 'تكنولوجيا أجهزة السمع',
      hearingDevicesDesc: 'تدريب على أجهزة السمع وزراعة القوقعة الحديثة',
      entMedicine: 'أساسيات طب الأنف والأذن والحنجرة',
      entMedicineDesc: 'فهم حالات الأذن والأنف والحنجرة',
      signLanguage: 'بيداغوجيا لغة الإشارة',
      signLanguageDesc: 'منهجيات التدريس باستخدام لغة الإشارة',
    },
    // Timeline
    timeline: {
      badge: 'مسيرتنا',
      title: 'المحطات والإنجازات',
      presidential: 'القرار الرئاسي',
      presidentialDesc: 'قرار الرئيس عبد المجيد تبون بإنشاء المدرسة العليا لأساتذة الصم والبكم',
      inauguration: 'افتتاح المدرسة',
      inaugurationDesc: 'الافتتاح الرسمي من قبل وزير التعليم العالي',
      firstYear: 'السنة الأكاديمية الأولى',
      firstYearDesc: '400 طالب مسجل في 14 تخصص',
      firstGraduation: 'التخرج الأول',
      firstGraduationDesc: 'تخرج 292 معلم متخصص',
      expansion: 'التوسع',
      expansionDesc: 'الإعلان عن 429 منصب جديد لبرنامج الماستر',
      newSeats: 'تسجيل جديد',
      newSeatsDesc: 'فتح 420 مقعداً جديداً للبرنامج',
    },
    // Programs
    programs: {
      badge: 'البرامج الأكاديمية',
      title1: '14 برنامجاً',
      title2: 'دراسياً متخصصاً',
      description: 'يجمع برنامج الماستر لدينا بين المواد الأكاديمية التقليدية والتدريب المتطور في منهجيات تعليم الصم.',
      mastersProgram: 'برنامج الماستر',
      mastersProgramDesc: 'يزود برنامجنا الشامل لمدة عامين المعلمين المستقبليين بجميع المهارات اللازمة لتعليم الطلاب الصم وضعاف السمع بفعالية.',
      twoYear: 'تدريب مكثف لمدة عامين',
      practical: 'خبرة تدريس عملية',
      medical: 'تدريب طبي متخصص',
      career: 'دعم التوظيف',
      faculty: 'إرشاد من أساتذة خبراء',
      facilities: 'مرافق حديثة',
    },
    // Gallery
    gallery: {
      badge: 'الحياة الجامعية',
      title1: 'الحياة في',
      title2: 'المدرسة العليا',
      campusGallery: 'معرض الحرم الجامعي',
    },
    // Wajihat (Centers)
    wajihat: {
      badge: 'واجهاتنا',
      title1: 'مراكز الابتكار',
      title2: 'والتميز',
      description: 'اكتشف مراكزنا المتخصصة المكرسة لتعزيز ريادة الأعمال والابتكار والتنمية الثقافية داخل مؤسستنا.',
      director: 'المدير',
      achievements: 'الإنجازات الرئيسية',
      entrepreneurship: 'دار المقاولاتية',
      entrepreneurshipDesc: 'تعزيز العقلية الريادية وثقافة الشركات الناشئة بين الطلاب، وتوفير الإرشاد والموارد وفرص التواصل لرواد الأعمال الطموحين.',
      entrepreneurshipAchievements: ['إطلاق أكثر من 15 شركة ناشئة طلابية', 'استضافة أكثر من 20 ورشة عمل في ريادة الأعمال', 'إقامة شراكات مع حاضنات محلية'],
      incubator: 'حاضنة الأعمال',
      incubatorDesc: 'دعم الأفكار التجارية المبتكرة من المفهوم إلى السوق، وتوفير مساحة العمل والتوجيه التمويلي والإرشاد الخبير لتحويل الأفكار إلى مشاريع ناجحة.',
      incubatorAchievements: ['احتضان أكثر من 10 مشاريع واعدة', 'تأمين التمويل لـ 5 شركات ناشئة', 'خلق أكثر من 30 فرصة عمل'],
      ai: 'دار الذكاء الاصطناعي',
      aiDesc: 'تطوير أبحاث وتطبيقات الذكاء الاصطناعي في تعليم الصم، وتطوير تقنيات مساعدة متطورة وحلول تعلم ذكية للطلاب ضعاف السمع.',
      aiAchievements: ['تطوير أدوات لغة الإشارة بالذكاء الاصطناعي', 'نشر 8 أوراق بحثية', 'تدريب أكثر من 100 طالب على أساسيات الذكاء الاصطناعي'],
      tisc: 'مركز دعم التكنولوجيا والابتكار',
      tiscDesc: 'توفير الدعم التقني وموارد الابتكار، ومساعدة الطلاب وأعضاء هيئة التدريس على الاستفادة من التكنولوجيا لتحسين نتائج التعلم والبحث.',
      tiscAchievements: ['تقديم 3 طلبات براءة اختراع', 'إنشاء برامج نقل التكنولوجيا', 'دعم أكثر من 50 مشروع ابتكار'],
      cultural: 'المراكز الثقافية والعلمية',
      culturalDesc: 'تعزيز التبادل الثقافي والتعاون العلمي، وتنظيم الفعاليات والمعارض والبرامج التي تحتفي بالتنوع وتعزز المعرفة العلمية.',
      culturalAchievements: ['تنظيم أكثر من 25 فعالية ثقافية', 'استضافة مؤتمرات دولية', 'إقامة شراكات أكاديمية'],
    },
    // Admission
    admission: {
      badge: 'انضم إلينا',
      title1: 'ابدأ رحلتك',
      title2: 'اليوم',
      description: 'انضم إلى مسابقتنا الوطنية لتصبح جزءاً من مؤسسة الجزائر الرائدة في تدريب معلمي الطلاب الصم وضعاف السمع.',
      processTitle: 'إجراءات القبول (2022-2026)',
      step1: 'المسابقة الوطنية',
      step1Desc: 'الدخول من خلال المسابقة الوطنية السنوية التي تنظمها وزارة التعليم العالي',
      step2: 'تقديم الطلب',
      step2Desc: 'تقديم الوثائق المطلوبة خلال فترة التسجيل المعلنة',
      step3: 'عملية الاختيار',
      step3Desc: 'يتم اختيار المرشحين بناءً على الجدارة الأكاديمية ونتائج المسابقة',
      step4: 'التسجيل',
      step4Desc: 'يسجل المرشحون الناجحون في برنامج الماستر لمدة عامين',
      requirementsTitle: 'المتطلبات',
      req1: 'شهادة البكالوريوس (الليسانس) في مجال ذي صلة',
      req2: 'مفتوح للطلاب الدوليين (العرب والأفارقة)',
      req3: 'اجتياز مسابقة الدخول الوطنية',
      req4: 'الالتزام بالتدريس في قطاع التعليم الوطني',
      req5: 'صحة بدنية جيدة',
      competitionOpen: 'مسابقة 2025 مفتوحة',
      positions: '429 منصب',
      availableFor: 'متاح لبرنامج الماستر',
    },
    // Contact
    contact: {
      badge: 'تواصل معنا',
      title: 'اتصل بنا',
      description: 'هل لديك أسئلة؟ نحن هنا لمساعدتك في بدء رحلتك في التعليم المتخصص.',
      visitUs: 'زورنا',
      followUs: 'تابعنا',
      ministry: 'الوزارة',
      visitCampus: 'قم بزيارة حرمنا الجامعي',
      campusLocation: 'يقع في قلب بني مسوس، الجزائر العاصمة',
      openInMaps: 'افتح في خرائط جوجل',
    },
    // Footer
    footer: {
      subtitle: 'المدرسة العليا لأساتذة الصم والبكم',
      description: 'تدريب معلمين متخصصين من أجل مستقبل أكثر شمولاً. أول مؤسسة من نوعها في أفريقيا والعالم العربي.',
      quickLinks: 'روابط سريعة',
      officialLinks: 'الروابط الرسمية',
      ministryLink: 'وزارة التعليم العالي',
      facebookLink: 'الصفحة الرسمية على فيسبوك',
      platformsLink: 'منصات وزارة التعليم العالي',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
};

const specializations = [
  { name: 'Mathematics', nameAr: 'الرياضيات', icon: '📐' },
  { name: 'Philosophy', nameAr: 'الفلسفة', icon: '🤔' },
  { name: 'French Language', nameAr: 'اللغة الفرنسية', icon: '🇫🇷' },
  { name: 'English Language', nameAr: 'اللغة الإنجليزية', icon: '🇬🇧' },
  { name: 'History', nameAr: 'التاريخ', icon: '📜' },
  { name: 'Geography', nameAr: 'الجغرافيا', icon: '🌍' },
  { name: 'Management', nameAr: 'التسيير', icon: '📊' },
  { name: 'Economics', nameAr: 'الاقتصاد', icon: '💹' },
  { name: 'Arabic Linguistics', nameAr: 'اللسانيات العربية', icon: '🔤' },
  { name: 'Anthropology', nameAr: 'الأنثروبولوجيا', icon: '👥' },
  { name: 'Physiological Anatomy', nameAr: 'التشريح الفسيولوجي', icon: '🧬' },
  { name: 'Ear Diseases', nameAr: 'أمراض الأذن', icon: '👂' },
  { name: 'Hearing Impairment Studies', nameAr: 'دراسات الإعاقة السمعية', icon: '🔊' },
  { name: 'Speech Therapy', nameAr: 'تقويم النطق', icon: '🗣️' },
];

const stats = [
  { value: 400, suffix: '+', suffixAr: '+', labelKey: 'studentsEnrolled' as const, icon: Users, color: 'from-blue-500 to-cyan-500' },
  { value: 14, suffix: '', suffixAr: '', labelKey: 'specializations' as const, icon: BookOpen, color: 'from-purple-500 to-pink-500' },
  { value: 2, suffix: ' Years', suffixAr: ' سنة', labelKey: 'masterProgram' as const, icon: Clock, color: 'from-orange-500 to-red-500' },
  { value: 292, suffix: '', suffixAr: '', labelKey: 'firstGraduates' as const, icon: Award, color: 'from-green-500 to-emerald-500' },
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop', alt: 'University campus' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop', alt: 'Classroom learning' },
  { url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop', alt: 'Students studying' },
  { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop', alt: 'Graduation ceremony' },
  { url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop', alt: 'Teacher in classroom' },
  { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', alt: 'Education concept' },
];


function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span id={`counter-${value}`} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div className={`absolute -top-1 ${isRTL ? '-left-1' : '-right-1'} w-4 h-4 bg-yellow-400 rounded-full animate-pulse`} />
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>ENS-SM</span>
                <span className={`text-xs block transition-colors ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>{isRTL ? 'بني مسوس، الجزائر' : 'Beni Messous, Algiers'}</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {[
                { key: 'about', label: t.nav.about },
                { key: 'programs', label: t.nav.programs },
                { key: 'wajihat', label: t.nav.wajihat },
                { key: 'gallery', label: t.nav.gallery },
                { key: 'admission', label: t.nav.admission },
                { key: 'contact', label: t.nav.contact },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/10 ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 hover:bg-blue-500/10 flex items-center gap-2 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm font-semibold">{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>
              <Button
                onClick={() => navigate('/login')}
                className={`${isRTL ? 'mr-4' : 'ml-4'} bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                {t.nav.applyNow}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
              >
                <Languages className="w-5 h-5" />
                <span className="text-xs font-semibold">{language === 'en' ? 'عربي' : 'EN'}</span>
              </button>
              <button
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 py-6 space-y-2">
            {[
              { key: 'about', label: t.nav.about },
              { key: 'programs', label: t.nav.programs },
              { key: 'wajihat', label: t.nav.wajihat },
              { key: 'gallery', label: t.nav.gallery },
              { key: 'admission', label: t.nav.admission },
              { key: 'contact', label: t.nav.contact },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`block w-full ${isRTL ? 'text-right' : 'text-left'} py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => navigate('/login')}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl"
            >
              {t.nav.applyNow}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=1080&fit=crop"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/85 to-purple-900/90" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[15%] animate-float">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white/80" />
            </div>
          </div>
          <div className="absolute top-48 right-[20%] animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-pink-300" />
            </div>
          </div>
          <div className="absolute bottom-32 left-[25%] animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
          </div>
          <div className="absolute bottom-48 right-[15%] animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Globe className="w-7 h-7 text-cyan-300" />
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20 animate-fadeIn">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              {t.hero.badge}
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>

            {/* Main Title */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slideUp ${isRTL ? 'font-arabic' : ''}`}>
              {t.hero.title1}
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>

            {/* Arabic Name (shown in English mode) or English subtitle (shown in Arabic mode) */}
            <p className={`text-2xl sm:text-3xl text-white/90 mb-6 animate-slideUp ${isRTL ? '' : 'font-arabic'}`} dir={isRTL ? 'ltr' : 'rtl'} style={{ animationDelay: '0.2s' }}>
              {t.hero.arabicName}
            </p>

            {/* Description */}
            <p className={`text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed animate-slideUp ${isRTL ? 'font-arabic' : ''}`} style={{ animationDelay: '0.4s' }}>
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={() => scrollToSection('programs')}
                className="group bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105"
              >
                {t.hero.explorePrograms}
                <ArrowRight className={`inline-block ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} w-5 h-5 transition-transform`} />
              </Button>
              <Button
                onClick={() => scrollToSection('gallery')}
                variant="outline"
                className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <Play className={`inline-block ${isRTL ? 'ml-2' : 'mr-2'} w-5 h-5`} />
                {t.hero.viewGallery}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce">
              <button
                onClick={() => scrollToSection('stats')}
                className="text-white/60 hover:text-white transition-colors"
              >
                <ChevronDown className="w-10 h-10" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.labelKey}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={isRTL ? stat.suffixAr : stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium">{t.stats[stat.labelKey]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent`} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              {t.about.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.about.title1}
              <span className="block text-blue-600">{t.about.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: GraduationCap, titleKey: 'specializedTraining', descKey: 'specializedTrainingDesc', image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop' },
              { icon: Heart, titleKey: 'inclusiveEducation', descKey: 'inclusiveEducationDesc', image: 'https://images.unsplash.com/photo-1529390079861-591f29a505be?w=400&h=300&fit=crop' },
              { icon: Globe, titleKey: 'firstInAfrica', descKey: 'firstInAfricaDesc', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop' },
            ].map((feature) => (
              <div
                key={feature.titleKey}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={t.about[feature.titleKey as keyof typeof t.about]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.about[feature.titleKey as keyof typeof t.about]}</h3>
                  <p className="text-white/80">{t.about[feature.descKey as keyof typeof t.about]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className={`absolute -top-4 ${isRTL ? '-right-4' : '-left-4'} w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-2xl`} />
              <div className={`absolute -bottom-4 ${isRTL ? '-left-4' : '-right-4'} w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-2xl`} />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{t.about.missionTitle}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {t.about.missionText1}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.about.missionText2}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">{t.about.keyTrainingAreas}</h4>
              {[
                { icon: Lightbulb, titleKey: 'orthophony', descKey: 'orthophonyDesc' },
                { icon: Target, titleKey: 'hearingDevices', descKey: 'hearingDevicesDesc' },
                { icon: Heart, titleKey: 'entMedicine', descKey: 'entMedicineDesc' },
                { icon: HandHeart, titleKey: 'signLanguage', descKey: 'signLanguageDesc' },
              ].map((item) => (
                <div
                  key={item.titleKey}
                  className={`group flex items-start gap-5 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${isRTL ? 'hover:translate-x-2' : 'hover:-translate-x-2'}`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-lg">{t.about[item.titleKey as keyof typeof t.about]}</h5>
                    <p className="text-gray-600">{t.about[item.descKey as keyof typeof t.about]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              {t.timeline.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.timeline.title}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 hidden lg:block" />

            <div className="space-y-12">
              {[
                { year: '2021', eventKey: 'presidential', descKey: 'presidentialDesc' },
                { year: '2022', eventKey: 'inauguration', descKey: 'inaugurationDesc' },
                { year: '2023', eventKey: 'firstYear', descKey: 'firstYearDesc' },
                { year: '2024', eventKey: 'firstGraduation', descKey: 'firstGraduationDesc' },
                { year: '2025', eventKey: 'expansion', descKey: 'expansionDesc' },
                { year: '2026', eventKey: 'newSeats', descKey: 'newSeatsDesc' },
              ].map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? (isRTL ? 'lg:text-left' : 'lg:text-right') : (isRTL ? 'lg:text-right' : 'lg:text-left')}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10">
                      <span className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-4 mb-2">{t.timeline[item.eventKey as keyof typeof t.timeline]}</h3>
                      <p className="text-white/70">{t.timeline[item.descKey as keyof typeof t.timeline]}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 w-6 h-6 bg-white rounded-full shadow-lg shadow-purple-500/50 hidden lg:block" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              {t.programs.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.programs.title1}
              <span className="block text-purple-600">{t.programs.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.programs.description}
            </p>
          </div>

          {/* Specializations Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {specializations.map((spec) => (
              <div
                key={spec.name}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{spec.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {isRTL ? spec.nameAr : spec.name}
                    </h3>
                    <p className={`text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300 ${isRTL ? '' : 'font-arabic'}`} dir={isRTL ? 'ltr' : 'rtl'}>
                      {isRTL ? spec.name : spec.nameAr}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Program Highlights */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&h=600&fit=crop"
              alt="Students in classroom"
              className="w-full h-[500px] object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${isRTL ? 'from-transparent via-indigo-900/90 to-purple-900/95' : 'from-purple-900/95 via-indigo-900/90 to-transparent'}`} />
            <div className={`absolute inset-0 flex items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
              <div className="max-w-2xl p-12">
                <h3 className="text-4xl font-bold text-white mb-6">{t.programs.mastersProgram}</h3>
                <p className="text-xl text-white/80 mb-8">
                  {t.programs.mastersProgramDesc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    t.programs.twoYear,
                    t.programs.practical,
                    t.programs.medical,
                    t.programs.career,
                    t.programs.faculty,
                    t.programs.facilities,
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wajihat (Centers) Section */}
      <section id="wajihat" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-1/3 h-full bg-gradient-to-r from-orange-50 to-transparent`} />
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent`} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              {t.wajihat.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.wajihat.title1}
              <span className="block text-orange-600">{t.wajihat.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.wajihat.description}
            </p>
          </div>

          {/* Centers Grid */}
          <div className="space-y-12">
            {[
              {
                icon: Rocket,
                titleKey: 'entrepreneurship' as const,
                descKey: 'entrepreneurshipDesc' as const,
                achievementsKey: 'entrepreneurshipAchievements' as const,
                color: 'from-orange-500 to-red-500',
                bgColor: 'from-orange-50 to-red-50',
                directorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
                directorName: isRTL ? 'د. أحمد بن علي' : 'Dr. Ahmed Ben Ali',
              },
              {
                icon: Building,
                titleKey: 'incubator' as const,
                descKey: 'incubatorDesc' as const,
                achievementsKey: 'incubatorAchievements' as const,
                color: 'from-blue-500 to-indigo-500',
                bgColor: 'from-blue-50 to-indigo-50',
                directorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
                directorName: isRTL ? 'د. فاطمة الزهراء' : 'Dr. Fatima Zahra',
              },
              {
                icon: Brain,
                titleKey: 'ai' as const,
                descKey: 'aiDesc' as const,
                achievementsKey: 'aiAchievements' as const,
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50',
                directorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
                directorName: isRTL ? 'د. كريم محمود' : 'Dr. Karim Mahmoud',
              },
              {
                icon: Cog,
                titleKey: 'tisc' as const,
                descKey: 'tiscDesc' as const,
                achievementsKey: 'tiscAchievements' as const,
                color: 'from-cyan-500 to-teal-500',
                bgColor: 'from-cyan-50 to-teal-50',
                directorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
                directorName: isRTL ? 'د. نادية بوزيد' : 'Dr. Nadia Bouzid',
              },
              {
                icon: Library,
                titleKey: 'cultural' as const,
                descKey: 'culturalDesc' as const,
                achievementsKey: 'culturalAchievements' as const,
                color: 'from-emerald-500 to-green-500',
                bgColor: 'from-emerald-50 to-green-50',
                directorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
                directorName: isRTL ? 'د. يوسف حداد' : 'Dr. Youssef Haddad',
              },
            ].map((center, index) => (
              <div
                key={center.titleKey}
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${center.bgColor} opacity-30`} />
                <div className="relative p-8 lg:p-10">
                  <div className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Director Info */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className={`w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white`}>
                          <img
                            src={center.directorImage}
                            alt={center.directorName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`absolute -bottom-3 ${isRTL ? '-left-3' : '-right-3'} w-12 h-12 bg-gradient-to-br ${center.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <center.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500 mb-1">{t.wajihat.director}</p>
                        <p className="font-semibold text-gray-900">{center.directorName}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${center.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <center.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                          {t.wajihat[center.titleKey]}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {t.wajihat[center.descKey]}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-500" />
                          {t.wajihat.achievements}
                        </h4>
                        <div className="grid sm:grid-cols-3 gap-3">
                          {(t.wajihat[center.achievementsKey] as string[]).map((achievement, idx) => (
                            <div
                              key={idx}
                              className={`flex items-start gap-2 p-3 bg-gradient-to-br ${center.bgColor} rounded-xl`}
                            >
                              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5`} style={{ color: center.color.includes('orange') ? '#f97316' : center.color.includes('blue') ? '#3b82f6' : center.color.includes('purple') ? '#a855f7' : center.color.includes('cyan') ? '#06b6d4' : '#10b981' }} />
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {t.gallery.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.gallery.title1}
              <span className="block text-cyan-600">{t.gallery.title2}</span>
            </h2>
          </div>

          {/* Main Gallery Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
            <img
              src={galleryImages[activeImage].url}
              alt={galleryImages[activeImage].alt}
              className="w-full h-[500px] object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className={`absolute bottom-8 ${isRTL ? 'right-8 left-8' : 'left-8 right-8'} flex justify-between items-end`}>
              <div>
                <p className="text-white/80 text-sm mb-1">{t.gallery.campusGallery}</p>
                <h3 className="text-2xl font-bold text-white">{galleryImages[activeImage].alt}</h3>
              </div>
              <div className="flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeImage === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${
                  activeImage === index ? 'ring-4 ring-cyan-500 scale-95' : 'hover:scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {activeImage !== index && (
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              {t.admission.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t.admission.title1}
              <span className="block text-green-600">{t.admission.title2}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.admission.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Admission Process */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                {t.admission.processTitle}
              </h3>
              <div className="space-y-8">
                {[
                  { step: 1, titleKey: 'step1', descKey: 'step1Desc' },
                  { step: 2, titleKey: 'step2', descKey: 'step2Desc' },
                  { step: 3, titleKey: 'step3', descKey: 'step3Desc' },
                  { step: 4, titleKey: 'step4', descKey: 'step4Desc' },
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-6 group">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      {index < 3 && (
                        <div className={`absolute top-full ${isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'} w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent`} />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">{t.admission[item.titleKey as keyof typeof t.admission]}</h4>
                      <p className="text-gray-600">{t.admission[item.descKey as keyof typeof t.admission]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  {t.admission.requirementsTitle}
                </h3>
                <ul className="space-y-4">
                  {[
                    t.admission.req1,
                    t.admission.req2,
                    t.admission.req3,
                    t.admission.req4,
                    t.admission.req5,
                  ].map((req) => (
                    <li key={req} className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2025 Competition Banner */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=300&fit=crop"
                  alt="Graduation"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <div>
                    <p className="text-green-100 font-semibold mb-2">{t.admission.competitionOpen}</p>
                    <p className="text-4xl font-bold text-white mb-2">{t.admission.positions}</p>
                    <p className="text-green-100">{t.admission.availableFor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-0 ${isRTL ? 'right-1/4' : 'left-1/4'} w-96 h-96 bg-blue-500/20 rounded-full blur-3xl`} />
          <div className={`absolute bottom-0 ${isRTL ? 'left-1/4' : 'right-1/4'} w-96 h-96 bg-purple-500/20 rounded-full blur-3xl`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              {t.contact.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                titleKey: 'visitUs' as const,
                content: isRTL ? ['بني مسوس', 'الجزائر العاصمة'] : ['Beni Messous', 'Algiers, Algeria'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Facebook,
                titleKey: 'followUs' as const,
                content: ['@ENS.SourdsMuets.dz'],
                link: 'https://www.facebook.com/ENS.SourdsMuets.dz/',
                color: 'from-indigo-500 to-purple-500',
              },
              {
                icon: Globe,
                titleKey: 'ministry' as const,
                content: ['www.mesrs.dz'],
                link: 'https://www.mesrs.dz',
                color: 'from-purple-500 to-pink-500',
              },
            ].map((item) => (
              <div
                key={item.titleKey}
                className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{t.contact[item.titleKey]}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {item.content[0]}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  item.content.map((line) => (
                    <p key={line} className="text-white/70">{line}</p>
                  ))
                )}
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop"
              alt="Algiers cityscape"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-white mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">{t.contact.visitCampus}</h3>
                <p className="text-white/70 mb-6">{t.contact.campusLocation}</p>
                <a
                  href="https://maps.app.goo.gl/rJwXzc4xZ3DKtVo37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  {t.contact.openInMaps}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="font-bold text-2xl">ENS-SM</span>
                  <span className="text-gray-400 block text-sm">{t.footer.subtitle}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t.footer.description}
              </p>
              <p className={`text-2xl text-gray-300 ${isRTL ? '' : 'font-arabic'}`} dir={isRTL ? 'ltr' : 'rtl'}>
                {isRTL ? 'Higher School for Teachers of Deaf and Mute' : 'المدرسة العليا لأساتذة الصم والبكم'}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
              <ul className="space-y-3">
                {[
                  { key: 'about', label: t.nav.about },
                  { key: 'programs', label: t.nav.programs },
                  { key: 'wajihat', label: t.nav.wajihat },
                  { key: 'gallery', label: t.nav.gallery },
                  { key: 'admission', label: t.nav.admission },
                  { key: 'contact', label: t.nav.contact },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => scrollToSection(item.key)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className={`w-4 h-4 opacity-0 ${isRTL ? 'translate-x-2 rotate-180 group-hover:-translate-x-0' : '-translate-x-2 group-hover:translate-x-0'} group-hover:opacity-100 transition-all`} />
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.officialLinks}</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.mesrs.dz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {t.footer.ministryLink}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ENS.SourdsMuets.dz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {t.footer.facebookLink}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mesrs.dz/index.php/plateformes-mesrs-ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {t.footer.platformsLink}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} ENS-SM. {t.footer.rights}
              </p>
              <p className="text-gray-500 text-sm">
                {isRTL ? 'بني مسوس، الجزائر العاصمة' : 'Beni Messous, Algiers, Algeria'}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .font-arabic {
          font-family: 'Noto Sans Arabic', 'Segoe UI', sans-serif;
        }
      `}</style>
    </div>
  );
}
