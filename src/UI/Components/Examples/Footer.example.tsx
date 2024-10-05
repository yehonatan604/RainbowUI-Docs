import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from "react-icons/fa6";
import {
  useTheme,
  Footer,
  FlexTypes,
  FlexDir,
  Flex,
} from "@yehonatan604/rainbow-plus-ui/src";

const FooterExample = () => {
  const mode = useTheme().mode;
  const bgColor = mode === "light" ? "bg-zinc-100" : "bg-zinc-800";
  const textColor = mode === "light" ? "text-zinc-900" : "text-zinc-300";
  const reservedColor = mode === "light" ? "text-zinc-500" : "text-zinc-400";

  return (
    <footer>
      <Footer
        bgColor={bgColor}
        textColor={textColor}
        reservedColor={reservedColor}
        childrenJustify={FlexTypes.SpaceBetween}
        childrenAlign={FlexTypes.Center}
        childrenDirection={FlexDir.Row}
        className="p-2 px-5"
      >
        <Footer.Brand className="hover:opacity-60 cursor-pointer">
          Rainbow UI
        </Footer.Brand>
        <Flex className="gap-10">
          <Footer.Brand to="https://www.facebook.com" className="hover:opacity-60">
            <FaFacebook size={30} />
          </Footer.Brand>
          <Footer.Brand to="https://www.instagram.com" className="hover:opacity-60">
            <FaInstagram size={30} />
          </Footer.Brand>
          <Footer.Brand to="https://www.twitter.com" className="hover:opacity-60">
            <FaTwitter size={30} />
          </Footer.Brand>
          <Footer.Brand to="https://www.reddit.com" className="hover:opacity-60">
            <FaReddit size={30} />
          </Footer.Brand>
        </Flex>
        <Flex className="gap-10">
          <Flex
            direction={FlexDir.Col}
            justify={FlexTypes.End}
            align={FlexTypes.End}
            className="gap-1 text-sm"
          >
            <Link to="/home" className="hover:opacity-60">
              Home
            </Link>
            <Link to="/about" className="hover:opacity-60">
              About
            </Link>
            <Link to="/contact" className="hover:opacity-60">
              Contact
            </Link>
          </Flex>
          <Flex
            direction={FlexDir.Col}
            justify={FlexTypes.End}
            align={FlexTypes.End}
            className="gap-1 text-sm"
          >
            <Link to="/terms" className="hover:opacity-60">
              Terms
            </Link>
            <Link to="/privacy" className="hover:opacity-60">
              Privacy
            </Link>
            <Link to="/sitemap" className="hover:opacity-60">
              Sitemap
            </Link>
          </Flex>
        </Flex>
      </Footer>
    </footer>
  );
};

export default FooterExample;
