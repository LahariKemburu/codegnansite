import Training_template from "./Training_template";
const headData = {
    title: "Best Python Training In Vijayawada",
    p: "Whenever you opt for an IT training program, the first question that comes to mind is whether will you get a job or not. If you also have a similar question in your mind, then don’t worry, we got you covered.Codegnan has various Python training courses in Vijayawada that not only assists you in quality training but also helps you complete practical hands-on projects on Python.",
    language:"English",
    duration:"1 Month",
    price: "8,000 ",
    rating:" 2,198",
    formh:"Become a Python developer",
    formtext:"Talk to our expert Python mentors and learn how our training programs in Hyderabad can help you become a Python developer and get a high-paying job.",
    no_of_hours:"60 HOURS INSTRUCTOR LED TRAINING"
  };
  
  const middleData = {
    title: "Python Course Overview ",
    color_title:"and Key Features",
    p: " Python has not only topped the charts in recent years but has also become the first choice of every learner. Codegnan provides an equal opportunity to IT people who are looking for career transition in AI, Machine Learning, or Data Science or beginners who want to jump into the software. We have both online and offline classes available for learners inclined towards Python. With Codegnan, you will work on real-time industry projects. ",
    list: [
      "Hackerrank certification included",
      "Learn from experts",
      "Online and offline classes",
      "Free doubt-clearing sessions",
      "Live projects",
      "Job assurance program",
    ]
  };
  
  const middle2Data={
    color_title:"Why Learn Python",
    title:" in Vijayawada? Benefits and Career Scope",
    p:"Python is known as a beginner-friendly language because of its relatively simple syntax. In addition, Python is versatile because of its usability in various domains such as Data Science, Machine Learning, Artificial Intelligence, etc. Vijayawada is considered one of the pioneer cities of the software industry.",
    list2:[
      {
        heading:"Easy to begin",
        info:"There are no skills required to begin with Python, making it a great deal for those without prior experience with any programming language."
      },
      {
        heading:" Career scope",
        info:"With Python training, you secure job profiles like Software Engineer, Senior Software Engineer, DevOps Engineer, Data Scientist, Senior Data Scientist, Data Analyst, etc."
      },
      {
        heading:"Python salary scope",
        info:"Python developer salary in Vijayawada ranges between 1.8 LPA to 5.5 LPA. Whereas the average annual salary of a Python developer is 3 Lakhs."
      },
      {
        heading:"Job support",
        info:"Expert-led learning with our industry-proven curriculum helps you create your portfolio to accelerate your career in the tech industry.  "
      },
      {
        heading:"1-on-1 mentorship",
        info:"When in doubt, you have access to your mentor until you achieve your career aspirations."
      }
    ]
  };
  
  const middle3Data={
    color_title:" Three Python Projects",
    title:" you will work on ",
  p:"At codegnan, we help students to get practical learning experience by integrating real-world Python projects in Vijayawada. Here are three primary Python projects that you will work on:",
    list:[
      {
        heading:"Dynamic Website Scraping and Data Analysis",
        info:"Students will learn how to extract data from complex, multi-page websites and analyze it. This project equips them with vital skills for data collection and analysis, essential in various industries, from market research to data-driven decision-making."
      },
      {
        heading:"Automated Email Sending",
        info:"In this project, students gain practical experience automating email communication. They'll understand the importance of efficient, personalized communication at scale, a skill relevant in marketing, customer engagement, and more."
      },
      {
        heading:"Virtual Assistant with Frontend Interface ",
        info:"Students create a virtual assistant with a user-friendly interface. This project teaches them how to integrate various Python skills into a practical application, offering valuable experience in software development and user interface design."
      }
    ]
  };
  
  const middle4Data = {
    color_title: "Who are These Python ",
    title: "Training Classes For ",
    p: "Python classes in Vijayawada are for those enthusiasts who love playing around data and statistics. The terms might seem complicated but we at Codegnan ensure that you are getting world-class training so that you are well acquainted with the concepts of Python programming language. Python training in Vijayawada is for : <br/><br/><ul>" +
        [
            "Final year students or freshers",
            "Data Science enthusiasts",
            "Programming Enthusiasts",
            "Project Managers",
            "Software developers",
            "Software engineers",
            "Technical leads Architects"
        ].map((item, index) => (
            "<li key=" + index + " style='margin-left: 150px;'>" + item + "</li>"
        )).join('') +
        "</ul>"
};

  
  const middle5Data={
    color_title:"Python Course Certification ",
    title:"  in Vijayawada",
    p:"We, at Codegnan, are committed to quality training models for all our training programs. We provide classroom blend training for both online and offline learners so that there is no barrier between you and your career. Once you complete your Python training with Codegnan, you become eligible for the Python certification exam through Hackerrank . \n We have trained more than 30,000 students worldwide. Our students are placed in top tech companies such as Google, Amazon, nVidia, Accenture, Bosch, Deloitte, Sonata, and Bank of America. You can also be one of those!"
  };
  
  const mentorsData={
    color_title:"Meet your",
    title:" Python course Trainers ",
    mentors:[
      {
        name:"Sairam Uppugundla",
        description:" Sairam Uppugundla is the CEO and founder of Codegnan IT Solutions. With a strong background in Computer Science and over 10 years of experience, he is committed to bridging the gap between academia and industry.\n Sairam Uppugundla is a dedicated IT professional with a Bachelor’s in Technology and Computer science with 10+ years of experience in this field.\nTo achieve his mission, Sairam Uppugundla decided to leave his position as a Data Engineer in Malaysia, returned to Andhra Pradesh, and established Codegnan. \nIn 2018, his deep-rooted interest in teaching led him to change his career, shifting his focus to bring up the next generation of engineers. ",
        image:"/members/sairam-sir.webp"
      },
      {
        name:"Saketh Kallepu",
        description:" Saketh Kallepu is a Data science professional in the IT field with a background in Computational Intelligence. Having 7+ years of experience in this field, he is an outstanding Data Science Mentor and trainer.\nSaketh Kallepu believes, <strong>“Don’t work hard, just work with heart.”</strong> With this belief, he joined as Co-Founder, mentor, and trainer at Codegnan to change the education platform and build a new technical arena for passionate learners. ",
        image:"/members/trainer-2.pngw3_.webp"
      }
    ]
  }
  
  const course_pricing={
    color_title:"Python Course Fees",
    title:"in Vijayawada ",
    p:"The cost of overall Python training in Vijayawada with is <strong>₹8,000</strong>. We understand the effort of students, thus, as a token of motivation, we provide a discount on a first come first serve basis.<strong> Apply now to get a course discounts.</strong>"
  }
  
  const otherLocationsData = {
    locationTitle: "Our other Python training location(s)",
    locations: [
      { name: "Banglore", link: "/banglore-training" }
    ],
    courseTitle: "codegnan's other training courses in Vijayawad",
    courses: [
      { name: "Python full-stack course", link: "/python-full-stack-course" },
      { name: "Core Java training", link: "/core-java-training" },
      { name: "Java Full-stack training course", link: "/full-stack-java-training" },
      { name: "Data science training", link: "/Data-science-training" },
      { name: "Machine learning", link: "/machine-learning-training" },
      { name: "React JS", link: "/React-js-training" },
      { name: "C Programming", link: "/C-programming-training" }
      
    ]
  };
  
  const map_address={
    title:"Visit codegnan’s Bangalore training centre",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.4853698586353!2d80.64656358459165!3d16.50557299096045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1712558461347!5m2!1sen!2sin",
    email:"info@codegnan.com",
    phoneNumber:"+91 98887 58888",
    address:"40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh 520010"
  }
  
  
  const training_options={
   
  }
export default function Python_training_in_Vijayawada() {
    return (
        <div>
        <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      </div>
    );
  }