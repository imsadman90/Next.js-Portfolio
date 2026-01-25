import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "UI/UX Systems",
];

const About = () => {
  return (
    <section
      id="about"
      className="flex-grow flex flex-col items-center justify-center relative overflow-hidden py-12 lg:py-24"
    >
      {/* Background Gradient Depth */}
      <div className="absolute inset-0 z-0 bg-background-dark bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#2a2442] via-background-dark to-background-dark opacity-80"></div>

      <div className="relative z-10 w-full px-6 lg:px-40 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Typography & Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8 order-2 lg:order-1"
          >
            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-2"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
                <span className="text-xs uppercase tracking-widest text-primary/80 font-semibold">
                  About Me
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white"
              >
                Crafting Digital Experiences
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 font-medium mt-2"
              >
                Frontend Developer | MERN Stack Learner | UI-Focused Engineer
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="prose prose-lg text-gray-400 leading-relaxed max-w-lg"
            >
              <p>
                I’m a frontend developer with 6 months of hands-on experience
                building responsive and interactive web interfaces using React
                and modern UI systems. I enjoy staying busy with meaningful work
                and continuously improving my skills through real projects.
              </p>
              <p className="mt-4">
                I have working knowledge of the MERN stack and I’m currently
                focusing on mastering Next.js to build scalable,
                production-ready applications. I believe in learning by building
                and improving every iteration. <br /> Beyond coding, I’m a
                vocalist and guitarist. Music helps me think creatively, while
                coding satisfies my love for structure and logic. Both keep me
                focused, disciplined, and motivated.
              </p>
            </motion.div>

            {/* Skill Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-[#1e1933] border border-[#3b3267] text-gray-300 text-sm font-medium flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    check_circle
                  </span>
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 h-12 px-8 bg-primary hover:bg-[#2a0eb5] text-white rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(55,19,236,0.3)] hover:shadow-[0_0_30px_rgba(55,19,236,0.5)]"
                href="https://drive.google.com/file/d/1_CHrRkRD2pbZ59B4O_DOJSz2ARR7cug8/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                download
              >
                <span>Download My Resume</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Minimal Abstract 3D Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center order-1 lg:order-2"
          >
            {/* Glow Effect Behind */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/40 rounded-full blur-[100px] pointer-events-none"
            ></motion.div>

            {/* 3D Graphic */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-2xl"
              style={{
                backgroundImage: "url('https://i.ibb.co/pjSM4L2R/sami.png')",
              }}
            ></motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute top-[10%] right-[10%] p-3 rounded-xl bg-[#1e1933]/80 backdrop-blur-sm border border-[#3b3267] shadow-lg"
            >
              <span className="material-symbols-outlined text-white text-[24px]">
                hub
              </span>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              className="absolute bottom-[20%] left-[5%] p-3 rounded-xl bg-[#1e1933]/80 backdrop-blur-sm border border-[#3b3267] shadow-lg"
            >
              <span className="material-symbols-outlined text-white text-[24px]">
                api
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
