import { useState } from "react";
import styled from "styled-components";
import searchIcon from "./img/search.svg";
import burgerIcon from "./img/Burger.svg";
import closeMenu from "./img/close.svg";

type Props = {
  onClick?: () => void;
};

type Users = {
  id: number;
  nameUser: string;
};

let users: Users[] = [
  {
    id: 1,
    nameUser: "Nastya Rabets",
  },
  {
    id: 2,
    nameUser: "Ann Wilson",
  },
];

let nameOfUsers = users.map((item) => item.nameUser.split(" "));

let initials = nameOfUsers.map((item) => item[0].charAt(0) + item[1].charAt(0));
console.log(initials);

export const Menu: React.FC<Props> = ({ onClick }) => {
  const [isOpened, setOpen] = useState(false);

// const tabItems = [
//     { id: "1", name: "All" },
//     { id: "2", name: "My favorites" },
//     { id: "3", name: "Popular" },
//   ];

// const [activeTabId, setActiveTabId] = useState(tabItems[0].id);

  return (
    <>
      <MenuWrap>
        <MenuBurger type="button" onClick={() => setOpen(!isOpened)}>
          <BurgerIcon src={isOpened ? closeMenu : burgerIcon} alt="menu" />
        </MenuBurger>
        <MenuSearch
          type="input"
          placeholder={isOpened ? undefined : "Search.."}
          style={{
            backgroundColor: isOpened ? "#2231aa" : "#2231aa",
            cursor: isOpened ? "not-allowed" : "auto",
          }}
          readOnly={isOpened ? true : false}
        ></MenuSearch>
        <MenuSearchBtn type="button">
          <SearchImg src={searchIcon}></SearchImg>
        </MenuSearchBtn>
        <MenuPersonWrap>
          <PersonInitials>{initials[0]}</PersonInitials>
          <PersonName>{users[0].nameUser}</PersonName>
        </MenuPersonWrap>
      </MenuWrap>
      <BurgerPersonWrap style={{ display: isOpened ? "flex" : "none" }}>
        <BurgerPersonInitials>
          {initials.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </BurgerPersonInitials>
        <PersonName>
          {users.map(({ id, nameUser }) => (
            <li key={id}>{nameUser}</li>
          ))}
        </PersonName>
      </BurgerPersonWrap>
    </>
  );
};

const MenuWrap = styled.div`
  width: 100%;
  display: flex;
  // justify-content: flex-end;
  // overflow: hidden
  // position: relative;
  // z-index: 100;
  line-height: 50px;
  background-color: #2231aa;
`;

const MenuBurger = styled.button`
  cursor: pointer;
  width: 60px;
  border: none;
  border-right: 2px solid #5360CD;
  background-color: #2231aa;
  font-size: 42px;
  text-align: center;
  outline: none;
  color: white;
  position: relative;

  &:active {
    background-color: #2231AA;
;
  }
`;

const BurgerIcon = styled.img`
  width: 25px;
`;

const MenuSearch = styled.input`
  width: 90%;
  background-color: #2231aa;
  border: none;
  outline: none;
  padding: 5px 15px;
  font-size: 15px;
  color: white;

  &::placeholder {
    color: white;
  }
`;

const MenuSearchBtn = styled.button`
  width: 60px;
  min-height: 100%;
  background-color: #2231aa;
  border: none;
  cursor: pointer;
  color: white;
  border-left: 2px solid #5360cd;
  border-right: 1px solid #5360cd;
`;

const SearchImg = styled.img`
  width: 20px;
`;

const MenuPersonWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2231aa;
  border-left: 1px solid #5360CD;
`;

const PersonInitials = styled.div`
  width: 35px;
  line-height: 35px;
  Border-radius: 5px;
  text-align: center;
  background-color: #5360CD;
  color: white;
`;

const PersonName = styled.div`
  width: 100;
  color: white;
  list-style-type: none;
`;

const BurgerPersonWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 20px #868686;
  line-height: 60px;
  align-items: center;
  background-color: #2231aa;
  border-top: 2px solid #5360CD;
`;

const BurgerPersonInitials = styled.div`
  width: 25px;
  // line-height: 35px;
  Border-radius: 5px;
  // justify-content: space-around;
  background-color: #5360CD;
  text-align: center;
  color: white;
`;
