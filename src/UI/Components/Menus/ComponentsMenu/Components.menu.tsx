import { Sidebar } from "react-hexa-dev";
import { FlexTypes } from "react-hexa-dev";
import { useTheme } from "react-hexa-dev";
import { SidebarOptions } from "react-hexa-dev";
import { SidebarHeaderOptions } from "react-hexa-dev";
import { SidebarItemOptions } from "react-hexa-dev";
import { TBorder } from "react-hexa-dev";
import { BiBorderRadius } from "react-icons/bi";
import { BsBorderAll } from "react-icons/bs";
import { CgCardClubs } from "react-icons/cg";
import { CiSliderHorizontal } from "react-icons/ci";
import { FaFont } from "react-icons/fa6";
import { Gi3dMeeple, GiAccordion } from "react-icons/gi";
import { GoSingleSelect } from "react-icons/go";
import { IoIosCheckboxOutline, IoIosColorPalette, IoMdQuote } from "react-icons/io";
import { LuSun } from "react-icons/lu";
import { MdOutlineHorizontalRule, MdOutlineTextFields } from "react-icons/md";
import { PiFrameCorners, PiListDashes, PiSidebar } from "react-icons/pi";
import { RiInputMethodLine } from "react-icons/ri";
import { RxButton } from "react-icons/rx";
import { TbLayoutBottombarFilled, TbLayoutNavbarFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const ComponentsMenu = () => {
  const { colors } = useTheme();
  const borderOptions = {
    variant: colors.standradDark,
    thickness: "2",
  } as TBorder;

  // Sidebar  Options
  const options = {
    bgVariant: "zinc-900",
    border: borderOptions,
    disableClose: true,
  } as SidebarOptions;

  const itemOptions = {
    textVariant: colors.white,
  } as SidebarItemOptions;

  const headerOptions = {
    bgVariant: "zinc-800",
    textVariant: colors.infoLight,
    placement: FlexTypes.Start,
  } as SidebarHeaderOptions;

  const common = {
    accordion: {
      icon: <GiAccordion />,
      title: "Accordion",
      link: "/components/accordion",
    },
    button: {
      icon: <RxButton />,
      title: "Button",
      link: "/components/button",
    },
    card: {
      icon: <CgCardClubs />,
      title: "Card",
      link: "/components/card",
    },
    rainbowBorder: {
      icon: <BiBorderRadius />,
      title: "Rainbow Border",
      link: "/components/rainbow-border",
    },
    ring: {
      icon: <PiFrameCorners />,
      title: "Ring",
      link: "/components/ring",
    },
    themeToggler: {
      icon: <LuSun />,
      title: "Theme Toggler",
      link: "/components/theme-toggler",
    },
  };

  const layout = {
    flex: {
      icon: <Gi3dMeeple />,
      title: "Flex",
      link: "/components/flex",
    },
    grid: {
      icon: <BsBorderAll />,
      title: "Grid",
      link: "/components/grid",
    },
  };

  const typography = {
    hr: {
      icon: <MdOutlineHorizontalRule />,
      title: "Hr",
      link: "/components/hr",
    },
    list: {
      icon: <PiListDashes />,
      title: "List",
      link: "/components/list",
    },
    quote: {
      icon: <IoMdQuote />,
      title: "Quote",
      link: "/components/quote",
    },
    title: {
      icon: <FaFont />,
      title: "Title",
      link: "/components/title",
    },
  };

  const form = {
    checkbox: {
      icon: <IoIosCheckboxOutline />,
      title: "Checkbox",
      link: "/components/checkbox",
    },
    colorPicker: {
      icon: <IoIosColorPalette />,
      title: "ColorPicker",
      link: "/components/color-picker",
    },
    label: {
      icon: <MdOutlineTextFields />,
      title: "Label",
      link: "/components/label",
    },
    rangeInput: {
      icon: <CiSliderHorizontal />,
      title: "RangeInput",
      link: "/components/range-input",
    },
    select: {
      icon: <GoSingleSelect />,
      title: "Select",
      link: "/components/select",
    },
    textInput: {
      icon: <RiInputMethodLine />,
      title: "TextInput",
      link: "/components/text-input",
    },
  };

  const navigation = {
    footer: {
      icon: <TbLayoutBottombarFilled />,
      title: "Footer",
      link: "/components/footer",
    },
    navbar: {
      icon: <TbLayoutNavbarFilled />,
      title: "Navbar",
      link: "/components/navbar",
    },
    sidebar: {
      icon: <PiSidebar />,
      title: "Sidebar",
      link: "/components/sidebar",
    },
  };

  return (
    <Sidebar
      options={options}
      style={{
        width: "17vw",
      }}
    >
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Common</h1>
      </Sidebar.Header>
      {Object.keys(common).map((key) => (
        <Sidebar.Item options={itemOptions} icon={common[key].icon} key={key}>
          <Link to={(common[key].link as string).toLowerCase()}>{common[key].title}</Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Forms</h1>
      </Sidebar.Header>
      {Object.keys(form).map((key) => (
        <Sidebar.Item options={itemOptions} icon={form[key].icon} key={key}>
          <Link to={(form[key].link as string).toLowerCase()}>{form[key].title}</Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Layout</h1>
      </Sidebar.Header>
      {Object.keys(layout).map((key) => (
        <Sidebar.Item options={itemOptions} icon={layout[key].icon} key={key}>
          <Link to={(layout[key].link as string).toLowerCase()}>{layout[key].title}</Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Navigation</h1>
      </Sidebar.Header>
      {Object.keys(navigation).map((key) => (
        <Sidebar.Item options={itemOptions} icon={navigation[key].icon} key={key}>
          <Link to={(navigation[key].link as string).toLowerCase()}>
            {navigation[key].title}
          </Link>
        </Sidebar.Item>
      ))}
      <Sidebar.Header options={headerOptions}>
        <h1 className="text-xl font-serif ml-5">Typography</h1>
      </Sidebar.Header>
      {Object.keys(typography).map((key) => (
        <Sidebar.Item options={itemOptions} icon={typography[key].icon} key={key}>
          <Link to={(typography[key].link as string).toLowerCase()}>
            {typography[key].title}
          </Link>
        </Sidebar.Item>
      ))}
    </Sidebar>
  );
};

export default ComponentsMenu;
