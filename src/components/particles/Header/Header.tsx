import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import SelectComponent from "../../moleques/SelectComponent";
import SearchComponent from "../../moleques/SearchComponent";
import {
  main_content,
  navItem,
  searchBar,
  brandName,
} from "../../../assets/styles/Header";
import {
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {Avatar, Badge, Button, Image} from "antd";

export default function Header() {
  return (
    <div css={main_content}>
      <div
        style={{
          width: "25%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div className="icon_container">
          <Link to={"/"}>
            <div className="image" style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <svg
                width="36"
                height="36"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  background: "linear-gradient(90deg, #2979FF 0%, #4C589E 100%",
                  padding: 4,
                  borderRadius: 5,
                }}
              >
                <path
                  d="M0.986625 19.448L3.64263 16.12C4.94396 17.2507 6.19196 18.0827 7.38663 18.616C8.60263 19.128 9.88263 19.384 11.2266 19.384C12.6133 19.384 13.7226 19.128 14.5546 18.616C15.3866 18.104 15.8026 17.4213 15.8026 16.568C15.8026 15.8 15.5146 15.2027 14.9386 14.776C14.384 14.3493 13.4453 14.0293 12.1226 13.816L7.67463 13.048C5.75463 12.728 4.29329 12.056 3.29063 11.032C2.30929 10.008 1.81863 8.68533 1.81863 7.064C1.81863 4.97333 2.60796 3.32 4.18663 2.104C5.78663 0.887999 7.94129 0.279999 10.6506 0.279999C12.272 0.279999 13.904 0.557332 15.5466 1.112C17.2106 1.66667 18.6613 2.43467 19.8986 3.416L17.4026 6.872C16.208 5.95467 15.0346 5.28267 13.8826 4.856C12.7306 4.408 11.5466 4.184 10.3306 4.184C9.09329 4.184 8.10129 4.41867 7.35463 4.888C6.60796 5.336 6.23463 5.944 6.23463 6.712C6.23463 7.39467 6.47996 7.928 6.97063 8.312C7.46129 8.696 8.28263 8.97333 9.43463 9.144L13.6586 9.848C15.8773 10.2107 17.5413 10.9253 18.6506 11.992C19.7813 13.0373 20.3466 14.424 20.3466 16.152C20.3466 18.328 19.4826 20.0667 17.7546 21.368C16.048 22.6693 13.7653 23.32 10.9066 23.32C9.11463 23.32 7.34396 22.9787 5.59462 22.296C3.86662 21.6133 2.33062 20.664 0.986625 19.448Z"
                  fill="white"
                />
              </svg>
              <span css={brandName}> Shopka </span>
            </div>
          </Link>
        </div>

        <Link to="/"
          style={{
            color: "#5A5B6A",
            fontWeight: 500,
            fontSize: 20,
            display: "flex",
            alignItems: "center"
          }}
        >
          <span>
            Sell on Shopka
          </span>
        </Link>

        <Link to="/register"
          style={{
            color: "#5A5B6A",
            fontWeight: 500,
            fontSize: 20,
            display: "flex",
            alignItems: "center"
          }}
        >
          <span>Register</span>
        </Link>
      </div>

      <div className="search_bar" css={searchBar}>
        <SelectComponent />
        <span
          style={{
            color: "black",
          }}
        >
          |
        </span>
        <SearchComponent />
      </div>

      <div
        className="nav_list"
        style={{
          width: "33%",

        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            float: "right",
            height: "100%",
          }}
        >

          <div className="nav_item" css={navItem}>
            <Link
              to={"/"}
              style={{
                color: "#5A5B6A",
                fontWeight: 600,
              }}
            >
                <Button style={{
                    borderRadius: 4
                }}>Wishlist</Button>
            </Link>
          </div>
          <div className="nav_item" css={navItem}>
            <Link
              to={"/"}
              style={{
                color: "#5A5B6A",
                fontWeight: 600,
              }}
            >
                <Button style={{
                    borderRadius: 4
                }}>Sign in</Button>
            </Link>
          </div>
          <div className="nav_item" css={navItem}>
            <Link
              to={"/"}
              style={{
                color: "#5A5B6A",
                fontWeight: 600,
              }}
            >
            <Badge count={5}>
                <Button style={{
                    borderRadius: 4
                }}>
                    My Cart
                </Button>
            </Badge>
            </Link>

          </div>
          <div className="nav_item" css={navItem}>
            <Link
              to={"/"}
              style={{
                color: "#5A5B6A",
                fontWeight: 600,
              }}
            >
                <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
            </Link>

          </div>
        </nav>
      </div>
    </div>
  );
}
