import { Link } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import HeaderListItem from "./HeaderListItem";
import { SlBasket } from "react-icons/sl";
import Cartbtn from "../cartbtn/Cartbtn";
import Dropdown from "../dropdown/Dropdown";
import DropPrint from "../dropdown/DropPrint";
import DropdownTrigger from "../dropdown/DropdownTrigger";
import DropdownMenu from "../dropdown/DropdownMenu";
import { FaChevronCircleDown } from "react-icons/fa";

const listItemidx = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About",
    path: "/about",
  },
  
];


const dropList= [
  {
    label:"Main Page",
    path:"/"
  },
  {
    label:"Google Translate",
    path:"https://translate.google.com/?sl=en&tl=az&op=translate"
  },
  {
    label:"Reverso Context",
    path:"https://context.reverso.net/translation/"
  }
]

export default ({
  setIsSidebarOpen,
}) => {

  // const toggleCartside = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  

  return (
    <>
      <header className="h-54px bg-slate-100 py-4 ">
        <Container flex justifyContent={"space-between"} gap={24}>
          <div className="font-bold mr-[20px]">
            <Link to="/">Start Bootstrap</Link>
          </div>

          <Flex as="ul" gap={24} className="flex-grow">
            {listItemidx.map((item, index) => (
              <HeaderListItem key={index} nav={item}/>
            ))}
            
          <Dropdown>
            <DropdownTrigger >Shop  {<FaChevronCircleDown className="translate-y-[5px] ml-1"/>}</DropdownTrigger>
            <DropdownMenu>
              <ul>
              {dropList.map((item, index)=>(
                <DropPrint key={index} labels={item} />
              ))}
              </ul>
            </DropdownMenu>

          </Dropdown>
          </Flex>

          <Cartbtn
            onClick={() => setIsSidebarOpen(true)} 
            prefix={<SlBasket />}
            suffix={
              <span className={"bg-black text-white rounded-full px-[6px]"}>
                0
              </span>
            }
          >
            Cart
          </Cartbtn>
          
        </Container>
      </header>
    </>
  );
};
