import { MotionButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition, variants } from "@/utils/framer_variants";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  MotionTabs,
} from "@/components/ui/tabs";
import { MotionDiv, MotionImage } from "@/utils/motionTags";

export default function Resume() {
  return (
    <>
      <div
        className={cn(
          "max-w-4xl mx-auto 2xl:pt-60 pt-32 px-3 pb-4 min-h-screen"
        )}
      >
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center">
            <MotionImage
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              src="/profile.png"
              width={155}
              height={155}
              className="md:w-36 w-28 rounded-full"
              alt="avatar"
            ></MotionImage>
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={transition.moveDown}
              className="sm:text-left text-center"
            >
              <h3 className="mb-2">
                Robin <span>Singh</span>
              </h3>
              <h5>Gwalior , India</h5>
            </MotionDiv>
          </div>
          <MotionButton
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transition.moveDown}
            variant="outline"
            size="lg"
          >
            Web Developer
          </MotionButton>
        </div>
        <MotionTabs
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          defaultValue="about"
          className="leading-7 mt-10"
        >
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <h6>Who I&apos;m </h6>
            <p className="text-accent-foreground mt-2">
              Hi, I'm Robin Singh a passionate Web Developer
              skilled in TypeScript, React.js, Next.js, and Node.js. I enjoy building responsive,
              scalable web apps using Tailwind CSS, Redux, and MongoDB. Currently pursuing B.Tech at IIIT Gwalior.
            </p>

          </TabsContent>
          <TabsContent value="skills">
            <h6>What I can do</h6>
            <p className="text-accent-foreground mt-2">

              I am a passionate and skilled full-stack web developer
              with a strong foundation in both frontend and backend technologies.
              I specialize in building responsive, user-friendly web applications
              using modern frameworks like Next.js, React.js, and Tailwind CSS, ensuring clean UI/UX
              design and performance optimization. On the backend, I work with Node.js and Express.js to
              develop secure and scalable RESTful APIs, incorporating features like JWT authentication and data encryption with Bcrypt.
              I am proficient in database management with MongoDB and MySQL, and I have experience integrating cloud databases
              like MongoDB Atlas. My knowledge of Redux allows me to efficiently manage complex application states,
              and I have implemented authentication systems using tools like Clerk. With a strong grasp of Data Structures,
              OOP, and Software Engineering principles, I bring a problem-solving mindset to every project.
              I am also comfortable working with tools like Git, GitHub, and VS Code, and I continuously strive to build
              innovative and reliable web solutions.
            </p>
          </TabsContent>
          <TabsContent value="experience">
            <h6>My Work</h6>
            <p className="text-accent-foreground mt-2">
              I gained hands-on industry experience as a Frontend Developer Intern at
              EkanshHR Solutions from October 2024 to December 2024,
              where I contributed to building intuitive and responsive user interfaces using Next.js,
              TypeScript, and Tailwind CSS. During this internship, I worked closely with Redux to implement
              effective state management across the application, ensuring smooth data flow and scalability.
              I also played a key role in crafting a modern, user-friendly design that enhanced the overall user experience.
              This experience allowed me to deepen my practical understanding of frontend development while collaborating in
              a real-world team environment, refining both my technical and communication skills.
            </p>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}
