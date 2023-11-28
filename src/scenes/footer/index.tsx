import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est unde
            officiis aperiam repellat rerum laudantium aliquam minus vitae odio
            ex pariatur officia exercitationem laboriosam maxime magnam omnis
            amet iusto at incidunt labore, accusamus sed? Dolores dolorem culpa
            neque nobis repellendus!
          </p>
          <p> Evogym All Right Reserved </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5"> ipsum dolor sit.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5">Lorem ipsum dolor sit.</p>
          <p className="my-5"> (333)-323-9938</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
