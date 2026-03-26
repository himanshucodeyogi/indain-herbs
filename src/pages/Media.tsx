import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Media.css';

const articles = [
  {
    title: '12th Edition of Kolkata International Poultry Fair 2026 – A Proud Milestone for Our Team',
    img: '//indianherbs.org/cdn/shop/articles/1770917765170_600x400.jpg?v=1771908296',
    excerpt: 'We were honored to participate in the 12th Edition of the Kolkata International Poultry Fair 2026, one of the most prestigious poultry events in the country.',
    href: 'https://indianherbs.org/blogs/news-and-event/12th-edition-of-kolkata-international-poultry-fair-2026-a-proud-milestone-for-our-team',
  },
  {
    title: 'Advancing Phytogenic Innovations at IPPE-2026',
    img: '//indianherbs.org/cdn/shop/articles/WhatsApp_Image_2026-02-10_at_10.33.52_AM_1_a668bc2b-c5de-448e-8048-0fd29158f742_600x400.jpg?v=1770710057',
    excerpt: 'INDIAN HERBS SPECIALITIES had a highly engaging and intellectually rewarding participation at the International Poultry Production Expo (IPPE) 2026.',
    href: 'https://indianherbs.org/blogs/news-and-event/advancing-phytogenic-innovations-at-ippe-2026',
  },
  {
    title: 'Global MasterClass Webinar Invitation – 2026',
    img: '//indianherbs.org/cdn/shop/articles/MasterClass_Invitation_Card_2026_600x400.png?v=1768212560',
    excerpt: 'We cordially invite you to a Global MasterClass Webinar with Dr. Steve Leeson, Professor Emeritus, University of Guelph, on cutting-edge poultry nutrition.',
    href: 'https://indianherbs.org/blogs/news-and-event/global-masterclass-webinar-invitation-2026',
  },
  {
    title: 'Our Commitment — Because Customers Deserve the Best',
    img: '//indianherbs.org/cdn/shop/articles/ChatGPT_Image_Jan_9_2026_02_42_09_PM_600x400.png?v=1767950064',
    excerpt: 'At Indian Herbs, our commitment to advancing animal nutrition and supporting our valued partners remains steadfast as we step into a new year of innovation.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-commitment-because-customers-deserve-the-best',
  },
  {
    title: "From the Director's Desk",
    img: '//indianherbs.org/cdn/shop/articles/Gemini_Generated_Image_z0ec5qz0ec5qz0ec_030e0c0c-f727-41bc-a51b-f6f6309795c5_600x400.png?v=1768213346',
    excerpt: 'Dear Patrons, Stakeholders and Esteemed Customers — as we welcome 2026, we extend our heartfelt wishes for a happy, healthy and prosperous year ahead.',
    href: 'https://indianherbs.org/blogs/news-and-event/from-the-director-s-desk-with-gratitude-to-our-patrons-stakeholders-and-valued-customers',
  },
  {
    title: 'We Participated in the 17th Poultry India Show | Hyderabad | Nov 2025',
    img: '//indianherbs.org/cdn/shop/articles/WhatsApp_Image_2025-12-16_at_1.47.04_PM_600x400.jpg?v=1765946800',
    excerpt: 'Indian Herbs Specialities had the privilege of participating in the 17th Edition of Poultry India Show, held at Hitex Exhibition Centre, Hyderabad.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-specialities-successfully-participated-in-17th-poultry-india-show-hitex-hyderabad-26-28-november-2025',
  },
  {
    title: 'Indian Herbs at the 2025 Animal Well-Being Summit',
    img: '//indianherbs.org/cdn/shop/articles/WhatsApp_Image_2025-11-21_at_10.49.48_AM_600x400.jpg?v=1763781773',
    excerpt: 'Indian Herbs proudly participated in the Animal Well-Being Summit – Convergence for a Healthier Tomorrow, a landmark event bringing together industry leaders.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-at-the-2025-animal-well-being-summit',
  },
  {
    title: 'Indian Herbs Organizes Technical Seminar on Sustainable Poultry Production in Nepal',
    img: '//indianherbs.org/cdn/shop/articles/Untitled_design_1_ef59c98d-a08e-42c9-a3fa-3cfbb2f2d6f2_600x400.jpg?v=1763144197',
    excerpt: 'Indian Herbs Specialities Pvt. Ltd. successfully organized a technical seminar on "Sustainable Poultry Production" for our partners in Nepal.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-organizes-technical-seminar-on-sustainable-poultry-production-in-nepal',
  },
  {
    title: 'Indian Herbs Celebrates World Egg Day – Nourishing Lives, Spreading Smiles',
    img: '//indianherbs.org/cdn/shop/articles/1760083194561_600x400.jpg?v=1760729580',
    excerpt: 'In celebration of World Egg Day, Indian Herbs proudly joined the global community in recognizing one of nature\'s most nutritious and versatile foods.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-celebrates-world-egg-day-nourishing-lives-spreading-smiles',
  },
  {
    title: 'Indian Herbs Participates in the 36th Annual General Meeting of the Poultry Federation of India',
    img: '//indianherbs.org/cdn/shop/articles/ih_d34273bc-2e5f-42b8-b4e8-53f330091fde_600x400.jpg?v=1761021632',
    excerpt: 'Indian Herbs proudly participated in the 36th Annual General Meeting (AGM) of the Poultry Federation of India (PFI), strengthening our industry partnerships.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-participates-in-the-36th-annual-general-meeting-of-the-poultry-federation-of-india',
  },
  {
    title: 'Successful Participation at VIV Turkey 2025 | Istanbul | April 24–26',
    img: '//indianherbs.org/cdn/shop/articles/VIV_Turky_2025_b3dbd1d1-5761-43c6-a6b5-f878e7033a5e_600x400.jpg?v=1749619234',
    excerpt: 'We are pleased to share that our team was honored to participate in VIV Turkey 2025, held in Istanbul from April 24th to 26th, showcasing our phytogenic innovations.',
    href: 'https://indianherbs.org/blogs/news-and-event/successful-participation-at-viv-turkey-2025-istanbul-april-24-26-%F0%9F%8C%8D',
  },
  {
    title: 'Indian Herbs at VIV Asia 2025 – A Remarkable Experience!',
    img: '//indianherbs.org/cdn/shop/articles/VIV_-_website_600x400.jpg?v=1744024331',
    excerpt: 'We are thrilled to share that Indian Herbs had a highly successful participation at VIV Asia 2025, held in Bangkok from March 12–14, 2025.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-at-viv-asia-2025-a-remarkable-experience-%F0%9F%8C%BF%E2%9C%A8',
  },
  {
    title: 'Indian Herbs at the 10th World Ayurveda Congress',
    img: '//indianherbs.org/cdn/shop/articles/WhatsApp_Image_2025-01-10_at_12.57.55_8ed91097_600x400.jpg?v=1736494389',
    excerpt: 'We are delighted to share our successful participation at the 10th World Ayurveda Congress, a prestigious platform celebrating the science of Ayurveda globally.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-at-the-10th-world-ayurveda-congress',
  },
  {
    title: 'Exciting News from Indian Herbs!',
    img: '//indianherbs.org/cdn/shop/articles/Pharmexcil_Certificate_with_Photo_600x400.png?v=1725098692',
    excerpt: 'We are thrilled to share that Indian Herbs Specialities Pvt. Ltd. has been honoured with the Export Performance Award by Pharmexcil.',
    href: 'https://indianherbs.org/blogs/news-and-event/exciting-news-from-indian-herbs',
  },
  {
    title: 'Building Positive Relationships in Business is One of the Most Important Foundations for Success',
    img: '//indianherbs.org/cdn/shop/articles/4_600x400.webp?v=1697108246',
    excerpt: 'We are privileged to welcome our Distributor from Bangladesh, Mr. Sayeed Sarwar, CEO AVON Animal Health, to our office for a productive partnership visit.',
    href: 'https://indianherbs.org/blogs/news-and-event/building-positive-relationships-in-business-is-one-of-the-most-important-foundations-for-success',
  },
  {
    title: "INDIAN HERBS Launched Another Research Breakthrough Product – 'Novel Natural Nutritional Emulsifier – BioEmulsin'",
    img: '//indianherbs.org/cdn/shop/articles/3.9_600x400.jpg?v=1697108197',
    excerpt: 'Indian Herbs Specialities Pvt Ltd along with their Bangladesh business partner Avon Animal Health Care hosted a seminar to launch BioEmulsin.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-launched-another-research-breakthrough-product-novel-natural-nutritional-emulsifier-bioemulsin',
  },
  {
    title: 'Indian Herbs Participation in the Asian Pig Veterinary Society (APVS) Congress – Taiwan 2023',
    img: '//indianherbs.org/cdn/shop/articles/2.1_600x400.webp?v=1697108141',
    excerpt: 'Excited to share Indian Herbs\' participation in the Asian Pig Veterinary Society (APVS) Congress held in Taiwan in 2023, connecting with global swine health experts.',
    href: 'https://indianherbs.org/blogs/news-and-event/excited-to-share-indian-herbs-participation-in-the-asian-pig-veterinary-society-apvs-congress-apvs-taiwan-2023',
  },
  {
    title: 'We are Delighted to Promote Mr. Paramartha Roy as Our National Sales Manager!',
    img: '//indianherbs.org/cdn/shop/articles/1.1_600x400.webp?v=1697107857',
    excerpt: 'We are thrilled to share some exciting news! Our dedicated and talented Poultry Sales Team has a new leader — congratulations to Mr. Paramartha Roy.',
    href: 'https://indianherbs.org/blogs/news-and-event/we-are-delighted-to-promote-mr-paramartha-roy-as-our-national-sales-manager',
  },
  {
    title: 'Exciting News from the Poultry Asia Expo in Kuala Lumpur!',
    img: '//indianherbs.org/cdn/shop/articles/KL_2_600x400.webp?v=1697108591',
    excerpt: 'We are thrilled to share our recent participation at the Poultry Asia Expo in Kuala Lumpur, Malaysia, connecting with poultry professionals across Asia.',
    href: 'https://indianherbs.org/blogs/news-and-event/exciting-news-from-the-poultry-asia-expo-in-kuala-lumpur',
  },
  {
    title: 'Indian Herbs Specialities Pvt. Ltd. – Pioneer and Global Market Leader in Herbal Animal Health Care Since 1951',
    img: '//indianherbs.org/cdn/shop/articles/7.3_600x400.webp?v=1697108565',
    excerpt: 'Indian Herbs Specialities Pvt. Ltd. — pioneer and global market leader in herbal animal health care industry since 1951, continuing a legacy of natural innovation.',
    href: 'https://indianherbs.org/blogs/news-and-event/indian-herbs-specialities-pvt-ltd-pioneer-and-global-market-leader-in-herbal-animal-health-care-industry-since-1951',
  },
  {
    title: 'Indian Herbs Launched BioEmulsin – A Novel Natural Nutritional Emulsifier at VIV Asia 2023, Bangkok',
    img: '//indianherbs.org/cdn/shop/articles/6.111_600x400.webp?v=1697108511',
    excerpt: 'Indian Herbs launched BioEmulsin — a novel natural nutritional emulsifier — at VIV Asia 2023 in Bangkok, Thailand, marking a new era in natural feed additives.',
    href: 'https://indianherbs.org/blogs/news-and-event/today-indian-herbs-launched-a-new-unique-research-product-bioemulsin-a-novel-natural-nutritional-emulsifier-at-viv-asia-2023-bangkok-thailand',
  },
  {
    title: 'Indian Herbs Aqua Division Annual Sales Conference 2023',
    img: '//indianherbs.org/cdn/shop/articles/5.3_600x400.webp?v=1697108425',
    excerpt: 'The energy and camaraderie were electrifying at the Indian Herbs Aqua Division Sales Conference 2023 — a huge success with colleagues from across the country.',
    href: 'https://indianherbs.org/blogs/news-and-event/the-energy-and-camaraderie-were-energizing',
  },
  {
    title: 'Participation of Indian Herbs in VIV Bangkok 2017',
    img: '//indianherbs.org/cdn/shop/articles/media-cnetr14_600x400.jpg?v=1691133012',
    excerpt: 'INDIAN HERBS participated in VIV BANGKOK 2017 held at the International Trade Exhibition Centre (BITEC), Bangkok from 15–17 March 2017.',
    href: 'https://indianherbs.org/blogs/news-and-event/participation-of-indian-herbs-in-viv-bangkok-2017-bangkok-from-15-17-march-2017',
  },
  {
    title: 'Celebration of the 146th National Safety Day / Week (4th March 2023)',
    img: '//indianherbs.org/cdn/shop/articles/elderly-person-children-holding-plant_600x400.png?v=1688551247',
    excerpt: 'Indian Herbs observed the 146th National Safety Day/Week on 4th March 2023, reaffirming our commitment to workplace safety and employee well-being.',
    href: 'https://indianherbs.org/blogs/news-and-event/celebration-of-the-146th-national-safety-day-week-4th-march-2023',
  },
];

const Media: React.FC = () => {
  return (
    <div className="media-page">
      <section className="media-hero">
        <div className="container">
          <h1>News & Events</h1>
          <p>Expert knowledge, research insights, and industry updates from our team.</p>
        </div>
      </section>

      <section className="section-padding media-content">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article, idx) => (
              <a
                key={idx}
                className="article-card"
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="article-image">
                  <img src={article.img} alt={article.title} loading="lazy" />
                  <div className="article-image-overlay">
                    <span>Read Article →</span>
                  </div>
                </div>
                <div className="article-info">
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="article-read-more">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="media-cta-section">
            <div className="media-cta-content">
              <h2>Stay Updated with Our Latest Insights</h2>
              <p>Get expert tips, research updates, and industry news delivered to your inbox</p>
              <div className="media-cta-buttons">
                <a href="/products" className="btn btn-primary">Shop Products</a>
                <a href="/contact" className="btn btn-outline">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
