
import { logo } from "../assets";
import styles from "../Style";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className="flex flex-wrap justify-between px-10 py-10  text-white">
  
    <div className="flex flex-col max-w-sm mb-8">
      <img src={logo} alt="hoobank" className="w-[250px] mb-4" />
      <p className={`${styles.paragraph} text-gray-400`}>
        A new way to make the payments easy, reliable and secure.
      </p>
    </div>

  
    <div className="flex flex-wrap gap-10">
      {footerLinks.map((items, index) => (
        <div key={index} className="min-w-[150px]">
          <h4 className="text-[18px] font-semibold mb-4">{items.title}</h4>
          <ul className="space-y-2">
            {items.links.map((item, ind) => (
              <li key={ind}>
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Footer;
