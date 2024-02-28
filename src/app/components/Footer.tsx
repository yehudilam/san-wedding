const Footer = () => {
  return (
    <footer className="w-full p-2">
      <div className="">
        <div className="text-3xl font-bold w-full text-center mb-4 underline underline-offset-4">
          <h2>如何前往</h2>
        </div>

        <div className="">
          <div className="mb-4">
            <h3 className="text-xl font-bold">巴士</h3>
            <div></div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold">鐵路</h3>
            <div></div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold">地址</h3>
            九龍旺角弼街56號基督教大樓2樓
          </div>

          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14763.360707967026!2d114.1692778!3d22.3218834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c840b6e0f5%3A0xb959bbe1ed6a82bc!2sThe%20Church%20of%20Christ%20in%20China!5e0!3m2!1sen!2suk!4v1708729620118!5m2!1sen!2suk"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
