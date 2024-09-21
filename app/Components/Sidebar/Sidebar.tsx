"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";

import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button/Button";
import { arrowLeft, bars, logout } from "@/app/utils/Icons";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";

function Sidebar() {
  const { theme, collapsed, collapseMenu } = useGlobalState();
  const { signOut } = useClerk();

  const { user } = useUser();

  const { firstName, lastName, imageUrl } = user || {
    firstName: "",
    lastName: "",
    imageUrl: "",
  };

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme} collapsed={collapsed}>
      <button className="toggle-nav" onClick={collapseMenu}>
        {collapsed ? bars : arrowLeft}
      </button>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} src={imageUrl} alt="profile" />
        </div>
        <div className="user-btn absolute z-20 top-0 w-full h-full">
          <UserButton />
        </div>
        <h1 className="capitalize">
          {firstName} {lastName}
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => {
                handleClick(link);
              }}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className="sign-out relative m-6">
        <Button
          name={"Sign Out"}
          type={"submit"}
          padding={"0.4rem 0.8rem"}
          borderRad={"0.8rem"}
          fw={"500"}
          fs={"1.2rem"}
          icon={logout}
          click={() => {
            signOut(() => router.push("/signin"));
          }}
        />
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav<{ collapsed: boolean }>`
  position: relative;
  width: ${(props) =>
    props.theme
      .sidebarWidth}; /* Yan menünün genişliği tema üzerinden ayarlanır */
  background-color: ${(props) =>
    props.theme.colorBg2}; /* Arka plan rengi tema üzerinden ayarlanır */
  border: 2px solid ${(props) => props.theme.borderColor2}; /* Kenarlık rengi tema üzerinden ayarlanır */
  border-radius: 1rem; /* Kenar köşeleri yuvarlatır */

  display: flex;
  flex-direction: column;
  justify-content: space-between; /* İçeriği dikey olarak hizalar */

  color: ${(props) =>
    props.theme.colorGrey3}; /* Yazı rengi tema üzerinden ayarlanır */

  @media screen and (max-width: 768px) {
    position: fixed; /* Mobil görünümde yan menüyü sabitler */
    height: calc(
      100vh - 2rem
    ); /* Yüksekliği ekran yüksekliği - 2rem olarak ayarlar */
    z-index: 100; /* Diğer öğelerin üstünde görünmesini sağlar */

    transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1); /* Animasyon geçiş süresi */
    transform: ${(props) =>
      props.collapsed
        ? "translateX(-107%)"
        : "translateX(0)"}; /* Yan menünün kaydırılması */

    .toggle-nav {
      display: block !important; /* Çözülen menü simgesinin görünür olmasını sağlar */
    }
  }

  .toggle-nav {
    display: none; /* Varsayılan olarak gizli */
    padding: 0.8rem 0.9rem;
    position: absolute;
    right: -69px;
    top: 1.8rem;

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    background-color: ${(props) =>
      props.theme.colorBg2}; /* Arka plan rengi tema üzerinden ayarlanır */
    border-right: 2px solid ${(props) => props.theme.borderColor2}; /* Sağ kenarlık rengi tema üzerinden ayarlanır */
    border-top: 2px solid ${(props) => props.theme.borderColor2}; /* Üst kenarlık rengi tema üzerinden ayarlanır */
    border-bottom: 2px solid ${(props) => props.theme.borderColor2}; /* Alt kenarlık rengi tema üzerinden ayarlanır */
  }

  .user-btn {
    .cl-rootBox {
      width: 100%;
      height: 100%;

      .cl-userButtonBox {
        width: 100%;
        height: 100%;

        .cl-userButtonTrigger {
          width: 100%;
          height: 100%;
          opacity: 0; /* Kullanıcı butonunu gizler */
        }
      }
    }
  }

  .profile {
    margin: 1.5rem;
    padding: 1rem 0.8rem;
    position: relative;

    border-radius: 1rem; /* Profil bölümünün kenar köşelerini yuvarlatır */
    cursor: pointer; /* Fare ile üzerine gelindiğinde tıklanabilir olduğunu belirtir */

    font-weight: 500;
    color: ${(props) =>
      props.theme.colorGrey0}; /* Yazı rengi tema üzerinden ayarlanır */

    display: flex;
    align-items: center;

    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px); /* Arka planı bulanıklaştırır */
      z-index: 0;
      background: ${(props) =>
        props.theme.colorBg3}; /* Arka plan rengi tema üzerinden ayarlanır */
      transition: all 0.55s linear; /* Geçiş animasyon süresi */
      border-radius: 1rem; /* Kenar köşelerini yuvarlatır */
      border: 2px solid ${(props) => props.theme.borderColor2}; /* Kenarlık rengi tema üzerinden ayarlanır */

      opacity: 0.2; /* Görünürlük oranı */
    }

    h1 {
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;

      line-height: 1.4rem;
    }

    .image,
    h1 {
      position: relative;
      z-index: 1;
    }

    .image {
      flex-shrink: 0; /* Resmin boyutunun küçülmesini engeller */
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease; /* Geçiş animasyon süresi */
      border-radius: 100%; /* Resmi yuvarlak yapar */

      width: 20px;
      height: 20px;

      img {
        border-radius: 100%; /* Resmi yuvarlak yapar */
        transition: all 0.5s ease; /* Geçiş animasyon süresi */
      }
    }

    > h1 {
      margin-left: 0.8rem;
      font-size: clamp(
        1.2rem,
        4vw,
        1.4rem
      ); /* Yazı boyutunu ekran genişliğine göre ayarlar */
      line-height: 100%;
    }

    &:hover {
      .profile-overlay {
        opacity: 1; /* Üzerine gelindiğinde profil örtüsünü görünür yapar */
        border: 2px solid ${(props) => props.theme.borderColor2}; /* Kenarlık rengini tema üzerinden ayarlar */
      }

      img {
        transform: scale(1.1); /* Üzerine gelindiğinde resmi büyütür */
      }
    }
  }

  .nav-item {
    position: relative;
    padding: 0.8rem 1rem 0.9rem 2.1rem;
    margin: 0.3rem 0;

    display: grid;
    grid-template-columns: 40px 1fr; /* İkon ve metin için grid düzeni oluşturur */
    cursor: pointer; /* Fare ile üzerine gelindiğinde tıklanabilir olduğunu belirtir */
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: ${(props) =>
        props.theme
          .activeNavLinkHover}; /* Aktif olmayan menü öğesinin üzerine gelindiğinde renk değişimi */
      z-index: 1;
      transition: all 0.3s ease-in-out; /* Geçiş animasyon süresi */
    }

    &::before {
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) =>
        props.theme.colorGreenDark}; /* Aktif menü öğesinin rengi */

      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a {
      font-weight: 500;
      transition: all 0.3s ease-in-out; /* Geçiş animasyon süresi */
      z-index: 2;
      line-height: 0;
    }

    i {
      display: flex;
      align-items: center;
      color: ${(props) =>
        props.theme.colorIcons}; /* İkon rengi tema üzerinden ayarlanır */
    }

    &:hover {
      &::after {
        width: 100%; /* Üzerine gelindiğinde arka planı genişletir */
      }
    }
  }

  .active {
    background-color: ${(props) =>
      props.theme.activeNavLink}; /* Aktif menü öğesinin arka plan rengi */

    i,
    a {
      color: ${(props) =>
        props.theme.colorIcons2}; /* Aktif menü öğesinin ikon ve metin rengi */
    }
  }

  .active::before {
    width: 0.3rem; /* Aktif menü öğesinin ön kısmındaki renkli çubuğun genişliği */
  }

  > button {
    margin: 1.5rem;
  }
`;

export default Sidebar;
