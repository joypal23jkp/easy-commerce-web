import React from "react";
import styled from "@emotion/styled";
import FooterNewsletterForm from "./FooterNewsletterForm";
import {GithubOutlined, LinkedinFilled} from "@ant-design/icons";

const TopFooter = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 36px;
    margin-top: 36px;
    border: 0.5px solid #80808030;
`;
const BottomSection = styled.div`
    background-color: #404040;
    color: white;
    padding: 12px;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    font-family: unset;
`;

const FooterSection = styled.div`
    
`;
const Title = styled.h3`
    margin-bottom: 0;
    font-weight: 700;
`;

const TitleList = styled.h4`
    margin-bottom: 0;
`;

const NewsletterDescription = styled.p`color: gray;`

class Footer extends React.Component<any, any>{
    render() {
        return (
           <div>
               <TopFooter>
                   <FooterSection>
                       <Title>Customer Service</Title>
                       <TitleList>Help Center</TitleList>
                       <TitleList>Message Us</TitleList>
                       <TitleList>CS</TitleList>
                   </FooterSection>

                   <FooterSection>
                       <Title>Policy & Information</Title>
                       <TitleList>Vendor Agreement</TitleList>
                       <TitleList>Buyer Agreement</TitleList>
                   </FooterSection>

                   <FooterSection>
                       <Title>Follow Us</Title>
                       <GithubOutlined  style={{ fontSize: 24, borderRadius: 4, padding: 4}}/>
                       <LinkedinFilled style={{color: 'darkblue', fontSize: 24, borderRadius: 4, padding: 4}}/>
                   </FooterSection>

                   <FooterSection>
                       <Title>SIGN UP FOR NEWSLETTER!</Title>
                       <FooterNewsletterForm />
                       <NewsletterDescription>Register now to get the latest news and updates</NewsletterDescription>
                   </FooterSection>
               </TopFooter>
               <BottomSection>
                    @ 2022 - <span>NinzaSoft</span>
               </BottomSection>
           </div>
        );
    }
}

export default Footer;
