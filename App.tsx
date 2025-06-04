import React, { useState, useCallback } from 'react';
import { PanelItemData } from './types';
import Panel from './components/Panel';
import { PhoneIcon, EmailIcon, LocationIcon, LinkIcon, GraduationCapIcon, BriefcaseIcon, BeakerIcon, AcademicCapIcon, SparklesIcon } from './components/IconComponents';

// Import the local image
import ProJpg from './pro.jpg'; // Assuming pro.jpg is in the same directory as this file
import Pro1Jpg from './pro1.jpg';
import Pro2Jpg from './pro2.jpg';
import Pro3Jpg from './pro3.jpg';
import Pro4Jpg from './pro4.jpg';

const USE_LOCAL_IMAGE = false;

// ---

// Define image URLs based on the flag
const proJpg = USE_LOCAL_IMAGE ? ProJpg : 'https://picsum.photos/seed/sumaita_profile_abstract/1200/800';
const pro1Jpg = USE_LOCAL_IMAGE ? Pro1Jpg : 'https://picsum.photos/seed/education_concept_tech/1200/800';
const pro2Jpg = USE_LOCAL_IMAGE ? Pro2Jpg : 'https://picsum.photos/seed/professional_clinic/1200/800';
const pro3Jpg = USE_LOCAL_IMAGE ? Pro3Jpg : 'https://picsum.photos/seed/research_lab_dna/1200/800';
const pro4Jpg = USE_LOCAL_IMAGE ? Pro4Jpg : 'https://picsum.photos/seed/community_stage/1200/800';



const SectionTitle: React.FC<{ icon?: React.ReactNode, title: string, className?: string }> = ({ icon, title, className }) => (
  <div className={`flex items-center mb-3 ${className}`}>
    {icon && <span className="mr-3 text-sky-300">{icon}</span>}
    <h3 className="text-xl sm:text-2xl font-semibold text-sky-200">{title}</h3>
  </div>
);

// ListItem component is not used, can be removed if not planned for future use.
// const ListItem: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
//  <li className={`mb-2 pl-4 border-l-2 border-sky-400 ${className}`}>{children}</li>
// );

const panelsData: PanelItemData[] = [
  {
    id: 'sumaita',
    title: 'Introduction',
    backgroundImageUrl: proJpg, // Replaced with local image import
    content: (
      <div className="space-y-4 text-sm sm:text-base">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">SUMAITA KABIR PROMITEE</h2>
        <p className="text-sky-300 text-lg sm:text-xl italic">Clinical Nutrition | Medical Professional | Researcher</p>
        <p className="text-gray-300 leading-relaxed">
          Driven and accomplished medical professional with a Master's in Clinical Nutrition and an ECE verified Bachelor of Medicine and Surgery. Experienced in teaching, clinical research, patient care, and public health. Passionate about improving health outcomes through evidence-based practice and innovation.
        </p>
        <div className="space-y-2 pt-3">
          <div className="flex items-center space-x-2 text-gray-200">
            <PhoneIcon className="w-5 h-5 text-sky-400" /> <span>(775)-830-9033</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-200">
            <EmailIcon className="w-5 h-5 text-sky-400" /> <a href="mailto:sumaitakabirpromitee@gmail.com" className="hover:text-sky-300">sumaitakabirpromitee@gmail.com</a>
          </div>
           <div className="flex items-center space-x-2 text-gray-200">
            <EmailIcon className="w-5 h-5 text-sky-400" /> <a href="mailto:spromitee@unr.edu" className="hover:text-sky-300">spromitee@unr.edu</a>
          </div>
          <div className="flex items-center space-x-2 text-gray-200">
            <LocationIcon className="w-5 h-5 text-sky-400" /> <span>920 Evans Ave, 332-A, Reno, NV-89512</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'education-skills',
    title: 'Education & Skills',
    backgroundImageUrl: pro1Jpg, // Replaced with local image import
    content: (
      <div className="space-y-6 text-sm sm:text-base">
        <SectionTitle icon={<GraduationCapIcon />} title="Education" />
        <div className="ml-2 space-y-3">
          <div className="p-3 bg-white/10 rounded-lg">
            <h4 className="font-semibold text-sky-100">Master of Science in Clinical Nutrition</h4>
            <p className="text-gray-300">University of Nevada, Reno</p>
            <p className="text-gray-400 text-xs sm:text-sm">August 26, 2024 - Present</p>
          </div>
          <div className="p-3 bg-white/10 rounded-lg">
            <h4 className="font-semibold text-sky-100">Bachelor of Medicine and Bachelor of Surgery</h4>
            <p className="text-gray-300">Mymensingh Medical College and Hospital, Bangladesh</p>
            <p className="text-gray-400 text-xs sm:text-sm">2014-2019, GPA: 3.84/4.00 (ECE Verified)</p>
          </div>
        </div>

        <SectionTitle icon={<AcademicCapIcon />} title="Key Skills" />
          <div className="ml-2 space-y-3">
            <div className="p-3 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-sky-100 mb-1">Technical</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
                    <li>Python for Research (Harvard T.H. CHAN certified)</li>
                    <li>Data Plotting (UNICEF open database)</li>
                    <li>Microsoft Office Suite (Word, Excel, PowerPoint, Outlook), EndNote</li>
                </ul>
            </div>
            <div className="p-3 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-sky-100 mb-1">Research & Clinical</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
                    <li>Biostatistics, Epidemiologic Tools, Clinical Trials Operations</li>
                    <li>Neuroanatomy, GDM Research, Anemia Awareness</li>
                </ul>
            </div>
            <div className="p-3 bg-white/10 rounded-lg">
                <h4 className="font-semibold text-sky-100 mb-1">Communication</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
                    <li>Cross-Cultural Communication, Teaching & Mentoring</li>
                </ul>
            </div>
        </div>
      </div>
    ),
  },
  {
    id: 'experience',
    title: 'Professional Experience',
    backgroundImageUrl: pro2Jpg, // Replaced with local image import
    content: (
      <div className="space-y-6 text-sm sm:text-base">
        <SectionTitle icon={<BriefcaseIcon />} title="Professional Experience" />
        {[
          {
            role: "Graduate Teaching Assistant",
            org: "Speech Pathology and Audiology Department, University of Nevada, Reno",
            date: "Aug 2024 - Present",
            points: [
              "Instructed and guided 35 undergraduate students in introduction to Neuroanatomy, simplifying complex concepts for diverse audiences.",
              "Collaborated with faculty to develop engaging course materials and foster a collaborative learning environment."
            ]
          },
          {
            role: "Clinical Fellow",
            org: "Nutrition and Clinical services division, icddr,b",
            date: "Oct 2021 – Dec 2022",
            points: [
              "Delivered patient care in outbreaks, antenatal services, preterm infant support, and pediatric nutrition.",
              "Administered clinical assessments and supported hospital based clinical research on maternal and child health."
            ]
          },
          {
            role: "Medical Officer",
            org: "Al-Manar Hospital and Central Hospital, Dhaka",
            date: "Jan 2021 - Sep 2021",
            points: ["Provided comprehensive medical care in a hospital setting."]
          },
          {
            role: "Intern Physician",
            org: "Mymensingh Medical College and Hospital, Bangladesh (BMDC no: A-103176)",
            date: "Mar 2019 - Mar 2020",
            points: [
              "Managed acute and chronic conditions, including cardiovascular diseases (myocardial infarction, stroke).",
              "Performed procedures: V cannulation, catheterization, suturing; assisted in major surgeries.",
              "Provided Kangaroo Mother Care for preterm infants; managed pediatric pneumonia, malnutrition, sepsis."
            ]
          }
        ].map(job => (
          <div key={job.role} className="p-3 bg-white/10 rounded-lg">
            <h4 className="font-semibold text-sky-100">{job.role}</h4>
            <p className="text-gray-300 italic">{job.org}</p>
            <p className="text-gray-400 text-xs sm:text-sm mb-1">{job.date}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs sm:text-sm">
              {job.points.map(point => <li key={point}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'research',
    title: 'Research & Publications',
    backgroundImageUrl: pro3Jpg, // Replaced with local image import
    content: (
      <div className="space-y-6 text-sm sm:text-base">
        <SectionTitle icon={<BeakerIcon />} title="Research & Publications" />
        <div className="p-3 bg-white/10 rounded-lg">
          <h4 className="font-semibold text-sky-100">Current Research Focus: Predictive Biomarkers in GDM</h4>
          <p className="text-gray-300 text-xs sm:text-sm">Investigating inflammatory biomarkers (cytokines, adipokines) for early Gestational Diabetes Mellitus diagnosis under Dr. Barrett Welch. Aim: improve clinical outcomes for pregnant women (GDM affects {'>'}45 million globally).</p>
        </div>
        <div className="p-3 bg-white/10 rounded-lg">
          <h4 className="font-semibold text-sky-100">Research Physician/ Program Coordinator</h4>
          <p className="text-gray-300 italic">Graduate School of Biomedical and Health Sciences, Hiroshima University (Mar 2019 – Mar 2020)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 mt-1 text-xs sm:text-sm">
            <li>Impact of E-health education on anemic status in school girls (with Dr Md. Moshiur Rahman).</li>
            <li>Conducted anemia awareness workshops for 69 adolescent girls.</li>
            <li>Guided discussions on menstrual health and hygiene.</li>
          </ul>
        </div>
        <div className="p-3 bg-white/10 rounded-lg">
          <h4 className="font-semibold text-sky-100">Publication</h4>
          <p className="text-gray-300 text-xs sm:text-sm">Rahman, Md Jiaur et al. "Impact of eHealth education to reduce anemia among school-going adolescent girls in rural Bangladesh: Study protocol of a randomized controlled trial." <em className="text-gray-400">Journal of Family Medicine and Primary Care</em> 12(11): 2569-2575, Nov 2023.
          <a href="https://doi.org/10.4103/jfmpc.jfmpc_1010_23" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-200 ml-1 group">
            DOI <LinkIcon className="inline w-3 h-3 group-hover:text-sky-200" />
          </a>
          </p>
        </div>
          <div className="p-3 bg-white/10 rounded-lg">
          <h4 className="font-semibold text-sky-100">Research Trainee</h4>
          <p className="text-gray-300 italic">Dept. of Community Medicine, Mymensingh Medical College (2016)</p>
          <p className="text-gray-300 text-xs sm:text-sm">Conducted cross-sectional study on high-risk pregnancy prevalence with Dr. Shahidul Basher.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'leadership-certs',
    title: 'Impact & Credentials',
    backgroundImageUrl: pro4Jpg, // Replaced with local image import
    content: (
        <div className="space-y-6 text-sm sm:text-base">
        <SectionTitle icon={<SparklesIcon />} title="Leadership & Services" />
        <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2 text-xs sm:text-sm">
            <li>Physical First Aider, Occupational Health and Safety | icddr,b | 2021</li>
            <li>Local Officer of Publication, International Federation of Medical Students (IFMSA) | 2018</li>
            <li>Event Organizer & Participant: Cancer Awareness Workshop and U.S.G. Training Session | 2018</li>
            <li>Prevalence of Smoking within the Medical Community Conditions | 2018</li>
            <li>Scientific Symposium: Hemorrhoid & Chronic Venous Disease, Bangladesh Medical Students Society | 2019</li>
        </ul>

        <SectionTitle icon={<AcademicCapIcon />} title="Certifications" />
        <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2 text-xs sm:text-sm">
            <li>Using Python for Research (Harvard T.H. CHAN, Nov 2023)
              <a href="https://colab.research.google.com/drive/1QkIX3418xx11J5ggjkoEbhNQdIk9FPED?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-200 ml-1 group">
                (View Sample <LinkIcon className="inline w-3 h-3" />)
              </a>
            </li>
            <li>Global Disease Masterclass: Non-communicable Diseases (Imperial College London, Nov 2022)</li>
            <li>Specialization in Biostatistics in Public Health (John Hopkins University, Oct 2022)</li>
            <li>Specialization: Essential Epidemiologic Tools for Public Health (John Hopkins University, Oct 2022)</li>
            <li>Specialization: Clinical Trials Operations (John Hopkins University, Oct 2022)</li>
            <li>Protecting Human Research Participants Online Training (PHRP), Cert: 2978528 (Mar 2022)</li>
            <li>Basics Epidemiology, Research and Stata (Organize by LUBH, 2022)</li>
            <li>Fundamental Neuroscience for Neuroimaging (John Hopkins University, Sep 2023)</li>
            <li>Certificate in Medical USG (CMU, May - Jul 2022)</li>
        </ul>

        <SectionTitle icon={<SparklesIcon className="transform rotate-45"/>} title="Volunteer Experience" />
          <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2 text-xs sm:text-sm">
            <li>Health-camp Organizer, Gouripur Upazilla Health Complex, Mymensingh | 2017</li>
            <li>Public Health Screening Diabetes Day, Mymensingh, Bangladesh | 2017</li>
            <li>Night of All Nations | 2024, University of Nevada, Reno</li>
        </ul>
      </div>
    ),
  },
];


const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePanelClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="font-['Muli'] bg-gray-900 min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="flex w-full"> {/* Removed max-w-6xl */}
        {panelsData.map((panel, index) => {
          // All panels are now always visible
          const displayClass = 'flex';
          
          return (
            <Panel
              key={panel.id}
              title={panel.title}
              backgroundImageUrl={panel.backgroundImageUrl}
              isActive={index === activeIndex}
              onClick={() => handlePanelClick(index)}
              displayClass={displayClass}
              panelIndex={index}
            >
              {panel.content}
            </Panel>
          );
        })}
      </div>
    </div>
  );
};

export default App;