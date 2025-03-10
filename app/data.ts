export const translations = {
  en: {
    title: "Case Studies in Organizational Improvement",
    subtitle: "A Collection of Success Stories",
    cases: {
      case1: {
        title: "Automating Government Paperwork",
        description: "How automation streamlined government operations and improved citizen services.",
      },
      case2: {
        title: "Optimizing Marketing Budgets",
        description: "Using data analytics to maximize marketing ROI and improve campaign effectiveness.",
      },
      case3: {
        title: "Improving Job Descriptions",
        description: "Modernizing job descriptions to attract diverse talent and improve hiring outcomes.",
      },
    },
    background: "Background",
    challenges: "Key Challenges",
    solution: "Solution",
    results: "Results",
    lessons: "Lessons Learned",
    viewReferences: "View References",
    backToHome: "Back to Home",
    references: "References",
  },
  ar: {
    title: "دراسات حالة في تحسين المؤسسات",
    subtitle: "مجموعة من قصص النجاح",
    cases: {
      case1: {
        title: "أتمتة المعاملات الحكومية",
        description: "كيف ساهمت الأتمتة في تحسين العمليات الحكومية وخدمة المواطنين",
      },
      case2: {
        title: "تحسين ميزانية التسويق",
        description: "استخدام تحليل البيانات لتحسين العائد على الاستثمار في التسويق",
      },
      case3: {
        title: "تحسين توصيف الوظائف",
        description: "تحديث توصيفات الوظائف لجذب المواهب المتنوعة وتحسين نتائج التوظيف",
      },
    },
    background: "الخلفية",
    challenges: "التحديات الرئيسية",
    solution: "الحل",
    results: "النتائج",
    lessons: "الدروس المستفادة",
    viewReferences: "عرض المصادر",
    backToHome: "العودة للرئيسية",
    references: "المراجع",
  },
}

export const references = {
  en: [
    { title: "IBM AI in Government", url: "https://www.ibm.com/think/topics/ai-in-government" },
    { title: "Data.gov Case Studies", url: "https://resources.data.gov/categories/case-studies-examples/" },
    {
      title: "PwC Marketing Budget Optimization",
      url: "https://www.pwc.ch/en/insights/transformation/optimising-marketing-budgets-b2b.html",
    },
  ],
  ar: [
    { title: "الذكاء الاصطناعي في الحكومة من IBM", url: "https://www.ibm.com/think/topics/ai-in-government" },
    { title: "دراسات حالة من Data.gov", url: "https://resources.data.gov/categories/case-studies-examples/" },
    {
      title: "تحسين ميزانية التسويق من PwC",
      url: "https://www.pwc.ch/en/insights/transformation/optimising-marketing-budgets-b2b.html",
    },
  ],
}

export const caseStudies = {
  en: [
    {
      title: "Automating Government Paperwork",
      background:
        "Government agencies handle vast amounts of paperwork, including applications, permits, and reports. Manual processing is slow, error-prone, and inefficient.",
      challenges: [
        "High volume of repetitive tasks",
        "Inconsistent data entry leading to errors",
        "Delays due to manual workflows",
        "Difficulty tracking application statuses",
      ],
      solution: [
        "Robotic Process Automation (RPA) for data entry, form filling, and document scanning",
        "Optical Character Recognition (OCR) to digitize paper documents",
        "Centralized digital platform for application submission and tracking",
        "Machine learning algorithms to predict issues and optimize resource allocation",
      ],
      benefits: [
        "Processing times reduced by 50% or more",
        "Improved data accuracy and consistency",
        "Faster, more transparent services",
        "Cost savings through reduced manual labor",
      ],
      lessons: [
        "Change management is critical for automation success",
        "Data security and compliance are essential",
        "Continuous updates and monitoring ensure system efficiency",
      ],
    },
    {
      title: "Optimizing Marketing Budgets",
      background:
        "Businesses must allocate marketing budgets wisely to maximize ROI. This study explores how data analytics can improve marketing efficiency.",
      challenges: [
        "Limited budget with multiple marketing channels",
        "Difficulty measuring campaign effectiveness",
        "Need for precise audience targeting",
      ],
      solution: [
        "Analyzing past campaigns using data analytics tools",
        "Identifying high-performing channels and audiences",
        "Shifting focus to digital marketing",
        "A/B testing to optimize content",
        "Predictive analytics to forecast trends and adjust spending",
      ],
      results: [
        "Increased ROI by prioritizing high-performing channels",
        "30% increase in conversions with lower costs",
        "Improved brand awareness among target demographics",
      ],
      lessons: [
        "Data-driven decisions are key to marketing success",
        "Regular strategy reviews maintain performance",
        "Balancing short-term and long-term goals is crucial",
      ],
    },
    {
      title: "Improving Job Descriptions",
      background:
        "A well-structured job description is vital for hiring the right talent. This study explores how an organization modernized job descriptions to attract diverse candidates.",
      challenges: [
        "Outdated descriptions misaligned with actual roles",
        "Biased language discouraging certain applicants",
        "Lack of clarity on required skills",
      ],
      solution: [
        "Conducting employee surveys",
        "Revising descriptions for clarity and inclusivity",
        "Removing biased language",
        "Adding measurable performance indicators",
        "Highlighting career growth opportunities",
      ],
      results: [
        "40% increase in diverse applicants",
        "Better alignment of roles and expectations",
        "Higher employee satisfaction",
      ],
      lessons: [
        "Job descriptions must be regularly updated",
        "Inclusive language improves recruitment outcomes",
        "Clear expectations enhance employee success",
      ],
    },
  ],
  ar: [
    {
      title: "أتمتة المعاملات الحكومية",
      background:
        "تعاني الجهات الحكومية من التعامل مع كميات هائلة من الأوراق مثل الطلبات، والتصاريح، والتقارير، مما يجعل العمليات بطيئة ومعرضة للأخطاء.",
      challenges: [
        "عدد هائل من المهام المتكررة يستهلك الوقت والموارد",
        "إدخال البيانات يدويًا يؤدي إلى أخطاء وعدم اتساق",
        "التأخير في معالجة الطلبات بسبب التعقيد البيروقراطي",
        "صعوبة تتبع حالة المعاملات بشكل دقيق",
      ],
      solution: [
        "استخدام أتمتة العمليات الروبوتية (RPA) لأداء المهام المتكررة مثل إدخال البيانات وملء النماذج ومسح المستندات",
        "تطبيق تقنية التعرف الضوئي على الحروف (OCR) لتحويل المستندات الورقية إلى بيانات رقمية",
        "تطوير منصة رقمية مركزية تتيح للمواطنين تقديم الطلبات وتتبع حالتها",
        "دمج الخوارزميات الذكية للتنبؤ بالمشكلات وتحسين تخصيص الموارد",
      ],
      benefits: [
        "تقليل وقت المعالجة بنسبة 50% أو أكثر",
        "تحسين دقة البيانات وتقليل نسبة الأخطاء البشرية",
        "تعزيز رضا المواطنين عبر خدمات أسرع وأكثر شفافية",
        "توفير التكاليف بتقليل الحاجة إلى العمل اليدوي",
      ],
      lessons: [
        "التغيير الإداري أمر أساسي لضمان نجاح الأتمتة في القطاع الحكومي",
        "يجب الالتزام بمعايير الأمان والخصوصية لضمان الامتثال للقوانين",
        "تحتاج الأنظمة إلى تحديثات ومراقبة مستمرة للحفاظ على كفاءتها",
      ],
    },
    {
      title: "تحسين ميزانية التسويق",
      background:
        "في ظل المنافسة الشرسة، تحتاج الشركات إلى استغلال ميزانيات التسويق بحكمة لتحقيق أقصى عائد على الاستثمار (ROI).",
      challenges: [
        "ميزانية محدودة مع تعدد القنوات التسويقية (السوشيال ميديا، التلفزيون، الصحف، البريد الإلكتروني)",
        "صعوبة قياس فعالية الحملات المختلفة",
        "الحاجة إلى استهداف العملاء المناسبين دون إهدار الموارد",
      ],
      solution: [
        "تحليل أداء الحملات السابقة باستخدام أدوات تحليل البيانات",
        "تحديد القنوات والجماهير الأكثر استجابة من خلال مؤشرات مثل نسب النقرات والتحويلات",
        "التركيز على التسويق الرقمي بسبب كفاءته العالية وتكلفته المنخفضة مقارنةً بالوسائل التقليدية",
        "استخدام اختبارات A/B لتحسين الإعلانات والمحتوى",
        "تطبيق تحليلات تنبؤية لتوقع اتجاهات السوق وتوزيع الميزانية بفعالية",
      ],
      results: [
        "زيادة العائد على الاستثمار عن طريق توجيه الميزانية نحو القنوات الأكثر فاعلية",
        "تحقيق زيادة 30% في معدلات التحويل مع خفض التكاليف",
        "تحسين الوعي بالعلامة التجارية لدى الجمهور المستهدف",
      ],
      lessons: [
        "اتخاذ القرارات بناءً على البيانات ضروري لنجاح التسويق",
        "مراجعة الاستراتيجيات باستمرار يضمن الحفاظ على الأداء الجيد",
        "تحقيق توازن بين المكاسب قصيرة الأجل والنمو طويل الأجل أمر أساسي",
      ],
    },
    {
      title: "تحسين توصيف الوظائف",
      background:
        "يعد توصيف الوظائف عنصرًا أساسيًا في عملية التوظيف، حيث يساعد في تحديد المرشحين المناسبين وتوضيح التوقعات وتحسين تقييم الأداء.",
      challenges: [
        "توصيفات وظيفية قديمة لا تعكس الأدوار الحقيقية للموظفين",
        "استخدام لغة متحيزة تقلل من فرص التقديم لبعض الفئات",
        "عدم وضوح المهارات المطلوبة للوظائف المختلفة",
      ],
      solution: [
        "إجراء استبيانات ومقابلات مع الموظفين للحصول على ملاحظاتهم حول التوصيفات القديمة",
        "إعادة كتابة التوصيفات الوظيفية للتركيز على المسؤوليات الأساسية والمهارات المطلوبة",
        "إزالة المصطلحات المتحيزة لضمان شمولية التوصيفات",
        "إضافة مؤشرات أداء قابلة للقياس لتوضيح التوقعات",
        "إبراز فرص التطور المهني داخل المنظمة",
      ],
      results: [
        "زيادة 40% في تنوع المتقدمين للوظائف",
        "تحسين التوافق بين التوصيفات الوظيفية والعمل الفعلي للموظفين",
        "تعزيز رضا الموظفين بسبب وضوح المسارات المهنية",
      ],
      lessons: [
        "يجب تحديث التوصيفات الوظيفية بانتظام لتظل ملائمة",
        "استخدام لغة شاملة يؤثر بشكل إيجابي على نتائج التوظيف",
        "التواصل الواضح للتوقعات يعزز نجاح الموظفين في وظائفهم",
      ],
    },
  ],
}

