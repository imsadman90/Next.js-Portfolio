import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "web",
    color: "blue",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "Accessibility", level: 82 },
    ],
  },
  {
    title: "Backend",
    icon: "dns",
    color: "purple",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express.js", level: 82 },
      { name: "RESTful APIs", level: 86 },
      { name: "JWT Authentication", level: 78 },
    ],
  },
  {
    title: "Database",
    icon: "storage",
    color: "emerald",
    skills: [{ name: "MongoDB", level: 85 }],
  },
  {
    title: "Tools",
    icon: "construction",
    color: "orange",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 90 },
      { name: "npm", level: 88 },
    ],
  },
  {
    title: "Animation",
    icon: "animation",
    color: "pink",
    skills: [
      { name: "Framer Motion", level: 85 },
      { name: "CSS Animations", level: 80 },
    ],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="flex-grow flex flex-col items-center justify-center py-12 px-4 md:px-10 relative"
    >
      {/* Background Decorative Blobs - Disabled for mobile performance */}
      {/* <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"
      ></motion.div> */}

      <div className="layout-content-container flex flex-col max-w-[1200px] w-full z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-[#9b92c9] text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto">
            My technical arsenal and proficiency levels as a MERN Stack
            Developer. I specialize in building scalable web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative flex flex-col p-6 rounded-2xl bg-[#1a162e]/60 backdrop-blur-xl border border-white/5 shadow-lg w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(55,19,236,0.3)]"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-[24px]">
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skill List */}
              <ul className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * skillIndex }}
                    className="flex flex-col gap-2 text-[#d0cde8] group-hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2 w-full justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          chevron_right
                        </span>
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 * skillIndex }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-purple-600"
                      ></motion.div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
