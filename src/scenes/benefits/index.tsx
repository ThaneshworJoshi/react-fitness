import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt deleniti numquam illo repudiandae ullam?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt deleniti numquam illo repudiandae ullam?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt deleniti numquam illo repudiandae ullam?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefit" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, quam
            illum mollitia voluptate ipsum fuga cum. Officiis tenetur qui
            quisquam illo consequatur? Sapiente, animi totam! Aliquid est quis
            sit tempora!
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-center gap-20 md:mt-28 md:flex">
          {/* Graphic */}
          <img
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
            className="mx-auto flex-1"
          />

          {/* Description */}
          <div className="flex-1">
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </div>
              </div>
            </div>
            {/* description */}

            <div>
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis consequuntur itaque beatae vitae voluptates sed, amet
                totam consequatur quasi, inventore, deleniti eius at similique
                exercitationem numquam voluptatum eaque sint natus! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus incidunt
                voluptate quasi placeat rerum odio nemo molestiae, fugiat
                impedit atque.
              </p>

              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                at accusantium laboriosam magni voluptates perspiciatis nam
                consectetur natus nesciunt quidem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur omnis deserunt vitae
                sequi sit cumque, doloremque eos! Praesentium, voluptas
                explicabo.
              </p>
            </div>

            {/* button */}

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
