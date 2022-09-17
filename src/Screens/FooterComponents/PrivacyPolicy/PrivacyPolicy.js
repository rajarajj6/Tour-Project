import { Box, Typography } from "@mui/material";
import React from "react";
import { RiTyphoonFill } from "react-icons/ri";
import Header from "../../HeaderComponents/Header";
import Footer from "../../FooterComponents/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const [t] = useTranslation();

  return (
    <Box>
      <Header />
      <Box
        className="mainBody"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          rowGap: 2,
          padding: { xs: "0% 3% 0% 3%", md: "3% 5% 3% 5%" },
          width: { xs: "92%", md: "50%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: "bold",
            }}
          >
            {t("PRIVACY AND COOKIES STATEMENT")}
          </Typography>
          <Box
            className="Effective: 25 March 2021"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("Effective: 25 March 2021")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "We know that sharing your personal information with us is based on trust. We take this seriously and are committed to ensuring that we respect your privacy when you visit our website or use our services. Please review this privacy and cookies statement (“Statement”) carefully to learn about our privacy practices."
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "We operate a service that enables users (“you”, “your”) to research, find, and book travel experiences worldwide. In this Statement, these are collectively referred to as our Services."
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "Our Services are owned and operated by MekoTourizm, Inc. By using our Services and visiting our websites and related applications, whether on a computer, phone, tablet or similar device (these are all referred to as a “Device”), you are accepting the practices described below."
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "As a global company, we operate in a number of countries and territories where the laws and customs differ. This Statement provides a general overview of our privacy practices."
              )}
            </Typography>
            <Box>
              <ol style={{ fontSize: "18px" }}>
                <li>{t("Information Collected")}</li>
                <li>{t("Information Uses")}</li>
                <li>{t("Information Sharing")}</li>
                <li>{t("Information Choices")}</li>
                <li>{t("Information Transfers")}</li>
                <li>{t("Information Security")}</li>
                <li>{t("Information Retention")}</li>
                <li>{t("Do Not Track Signals")}</li>
                <li>{t("Cookies")}</li>
                <li>{t("Cookie Consent Tool")}</li>
                <li>{t("Statement Changes and Notification")}</li>
                <li>{t("Contact")}</li>
                <li>{t("Europe")}</li>
                <li>{t("California")}</li>
              </ol>
            </Box>
          </Box>
        </Box>
        <Box
          className="details"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 1,
          }}
        >
          <Box className="Information Collected">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("1.Information Collected")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "When you access or use our Services, we collect information from and about you to provide a more personalized and relevant experience Some information we collect automatically. Other information we collect from different sources, including affiliated entities business partners, and other independent third-party sources. When you use our Services by “clicking-through” from a third-party site or when you visit third-party sites via our Services, those third-party sites may share information with us about your use of their service. Information collected may include the following:"
              )}
            </Typography>
            <Box className="ul">
              <ul style={{ fontSize: "18px" }}>
                <li>
                  {t(
                    "Contact information, including name, phone number and postal and email addresses"
                  )}
                </li>
                <li>
                  {t(
                    " Billing or payment information (such as your credit card number cardholder name, expiration date, authentication code and billing address)"
                  )}
                </li>
                <li>{t("User name and password")}</li>
                <li>
                  {t(
                    "Photos, reviews and social posts and videos you may have provided to us"
                  )}
                </li>
                <li>{t("Geolocation information")}</li>
                <li>
                  {t(
                    "Device information, such as when you accessed our Services and information about the Device used (for example, IP address software or internet browser used, preferred languages, unique Device identifiers and advertising identifiers)"
                  )}
                </li>
                <li>
                  {t(
                    "Online activity, including pages you have visited, content reviewed and apps reviewed"
                  )}
                </li>
                <li>{t("Booking history")}</li>
                <li>
                  {t("Information about your travel plans and preferences")}
                </li>
              </ul>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "We may also collect, in instances where you have provided it information about other travellers, including their email address and other travel-related information. If you are sharing information with us about other individuals, you must obtain their consent."
              )}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "In addition to the categories noted above, we may also collect location information if you have instructed your Device to send such information via the privacy settings on that Device, or, for example, if you have uploaded photos tagged with location information. We may use your location information directly and/or share your location with third parties. We collect and share location information in order to provide you with relevant content to analyze your use of our Services, to improve our Services and to provide contextual advertising or recommendations. For example, we may use your location to show you reviews of hotels, restaurants or attractions near you when you are traveling."
              )}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "You can change the privacy settings of your Device at any time in order to turn off the functionality that collects and shares location information and/or the functionality to tag your photos with location information. However, turning off location-sharing may affect certain features that we offer. If you have any questions about the privacy settings of your Device, we suggest you contact the manufacturer of your Device or your mobile service provider for help."
              )}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "Please see the section on Cookies below for more information regarding the use of cookies and other technology described in this section, including regarding your choices relating to such technologies."
              )}
            </Typography>
          </Box>

          <Box className="Information Uses">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("2.Information Uses")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "We are committed to providing you with relevant content on our Services and respect the data privacy laws of the different jurisdictions in which we operate. We use information about you so we can help you enjoy and use our Services, including in the following ways"
              )}
              :
            </Typography>
            <Box className="ul">
              <ul style={{ fontSize: "18px" }}>
                <li>{t("Register and manage your MekoTourizm account")}</li>
                <li>{t("Facilitate your bookings")}</li>
                <li>{t("Measure interest in and improve our Services")}</li>
                <li>
                  {t(
                    "Notify you about special offers, prize draws, competitions and services available from us, our affiliates, or our partners that may be of interest to you"
                  )}
                </li>
                <li>{t("Communicate with you")}</li>
                <li>
                  {t(
                    "Enable communication between travelers and operators of travel experiences listed through us"
                  )}
                </li>
                <li>
                  {t(
                    "Enable us to publish your reviews, ratings, photos, videos and other content"
                  )}
                </li>
                <li>
                  {t(
                    "Customize your experience, including customizing the ads shown to you on our Services and across the internet"
                  )}
                </li>
                <li>
                  {t("Make inferences about your interests or preferences")}
                </li>
                <li>
                  {t(
                    "Provide you with an optimized experience and to group users of our Services based on, for example, usage and demographics"
                  )}
                </li>
                <li>{t("Send you survey or market research invitations")}</li>
                <li>{t("Respond to your questions and comments")}</li>
                <li>{t("Resolve disputes or troubleshoot problems")}</li>
                <li>
                  {t("Prevent potentially prohibited or unlawful activities")}
                </li>
                <li>
                  {t(
                    "Enforce our terms of use and notices; and as otherwise described to you at the point of collection"
                  )}
                </li>
              </ul>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "Please note some information about you is required in order for us to provide you with relevant offerings from us, our affiliates and our partners and to enable you to enjoy other benefits of being a MekoTourizm user. Please review the “Information Choices” section below with respect to your choices related to the collection and use of your information."
              )}
            </Typography>
          </Box>

          <Box className="Information Sharing">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("3.Information Sharing")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t(
                "In order to provide some of our Services, we may need to share information with certain other third parties, including our group of companies, in the following circumstances:"
              )}
            </Typography>
            <Box>
              <ul style={{ fontSize: "18px" }}>
                <li>
                  {t(
                    "Our Group of Companies. We share information with companies in our corporate family so we can provide you with information about products and services, both travel-related and others, which might interest you. These companies and websites will comply with this Statement and all applicable laws governing the transmission of promotional communications."
                  )}
                </li>
                <li>
                  {t(
                    "Experience Suppliers. We share your information with suppliers of travel experiences to allow them to fulfil the bookings you make through our Services."
                  )}
                </li>
                <li>
                  {t("Service Providers. We share information with certain service providers used to facilitate our Services, including to help with transactions.")}
                </li>
                <li>
                  {t("Business Partners. We may share information about you, your Devices and your use of our Services with our trusted business partners. For example, we may share information so that we can provide you with relevant content or in order to facilitate payment for a booking. This sharing is generally pursuant to written agreements which include confidentiality, privacy and security obligations; however, note that we do not control the privacy practices of these third-party business partners.")}
                </li>
                <li>
                  {t("Social Media Sites. When you use our Services and elect to share information with third-party social media sites, the information you share will be governed by the privacy policies of those social media sites and the privacy settings you have set with those social media websites.")}
                </li>
                <li>
                  {t("Advertising Networks. We sometimes collect and share information about your interests with advertising networks Some of these companies are members of the Network Advertising Initiative or the Digital Advertising Alliance, which offer a single location to opt-out of ad targeting from member companies. To learn more, please click here.")}
                </li>
                <li>
                  {t("Other third parties, such as referring websites.Third parties may also assist us in collecting information by, for example operating features of our website or facilitating the delivery of online advertising tailored to your interests. We may share audience segments and other information with third parties that use that information for tailored advertising to you.")}
                </li>
              </ul>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("Third parties may only collect or access information as needed to perform their permitted functions.")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("Certain Device operating system versions permit you to opt out of certain types of information sharing, including to certain advertising networks. Please check your Device settings if you want to limit such tracking.")}
            </Typography>
          </Box>

          <Box className="Information Choices">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("4.Information Choices")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("You have options with respect to the collection and use of your information.")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("Your options:")}
            </Typography>
            <Box className="ul">
              <ul style={{ fontSize: "18px" }}>
                <li>
                  {t("You can choose not to provide us with certain information although it may be needed to take advantage of certain features offered on our websites.")}
                </li>
                <li>
                  {t("You can prevent the collection of geolocation information, but note that turning off location sharing may affect certain features of our Services.")}
                </li>
                <li>
                  {t("You also can add or update information and close your account If you close your account, we will deactivate your account and remove your profile information. We may retain some information associated with your account (including past transactions) for internal purposes including backups, fraud prevention, dispute resolution, investigations and legal compliance for the period necessary to fulfill the purposes outlined in this Statement.")}
                </li>
                <li>
                  {t("You will be given the opportunity to unsubscribe from promotional messages, including emails with travel-related opportunities, in any such promotional message we send.")}
                </li>
              </ul>
            </Box>
          </Box>

          <Box className="Information Transfers">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("5.Information Transfers")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("We are a global company and we operate in many different jurisdictions. If we transfer your information to other countries we will use and protect that information as described in this Statement and in accordance with applicable law.")}
            </Typography>
          </Box>

          <Box className="Information Security">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("6.Information Security")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("We have implemented appropriate administrative, technical, and physical security procedures to help protect your information. We only authorize specific employees to access personal information and they may do so only for permitted business functions. We use encryption when transmitting your information between your system and ours, and between our system and those of the parties with whom we share information. We also employ firewalls and intrusion detection systems to help prevent unauthorized access to your information. However, we cannot guarantee the security of information from unauthorized entry or use, hardware or software failure, or other circumstances outside of our control.")}
            </Typography>
          </Box>

          <Box className="Information Retention">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("7.Information Retention")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("We will retain copies of your information for as long as you maintain your account or as necessary in connection with the purposes set out in this Statement, unless applicable law requires a longer retention period. In addition, we may retain your information for the duration of any period necessary to establish exercise or defend any legal rights.")}
            </Typography>
          </Box>

          <Box className="Do Not Track Signals">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("8.Do Not Track Signals")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("Our website is not designed to currently respond to “Do Not Track” (“DNT”) signal requests from browsers. This is due to the lack of global standardized interpretation that defines “Do Not Track” signals. Once the industry has settled on standards related to this issue, we may re-evaluate this approach.")}
            </Typography>
          </Box>

          <Box className="Cookies">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("9.Cookies")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("We want your access to our Services to be as easy, efficient and useful as possible. To help us do this, we use cookies and similar technologies to improve your experience, to enhance site security and to show you relevant advertising.")}
            </Typography>

            <Box className="What are cookies?">
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: "bold",
                }}
              >
                {t("What are cookies?")}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                }}
              >
                {t("Cookies are small text files that are automatically placed on your Device when you visit almost any website. They are stored by your internet browser and contain basic information about your internet use. Your browser sends these cookies back to a website every time you revisit it, so it can recognize your Device and improve your experience by, among other things providing you with personalized content. We also use cookies to remember your login details, so you don’t have to re-enter them repeatedly when you use our Services. Other cookies help us understand your preferences. The cookies we use fall into three categories.")}
              </Typography>
              <Box className="ul">
                <ul style={{ fontSize: "18px" }}>
                  <li>
                    {t("Essential - These cookies are necessary to help you access and move around the website and use all its features Without these cookies, the website would not work properly and you would not be able to use certain important features For example, we use a cookie to keep you logged in during your visit, so the site does not require you to log in repeatedly to access different pages. We may also use essential cookies for fraud detection and prevention purposes. You cannot turn off essential cookies through the Cookie Consent Tool, as such cookies are necessary for you to access and use the features of the website.")}
                  </li>
                  <li>
                    {t("Analytics and customisation - We use these cookies to help us understand how the website is being used and how we can improve your experience of it. These cookies can provide us with information to help us understand which parts of the website interest our visitors and if they experience any errors. We use these cookies to test different designs and features for our sites and we also use them to help us monitor how visitors reach the website. We also use cookies to save your settings and preferences on the website, such as language preference and information you've previously entered when searching for travel experiences. Some customization cookies are essential if you want to use certain features of the website.")}
                  </li>
                  <li>
                    {t("Advertising - Advertising cookies help ensure that the advertisements you see are as relevant to you as possible For example, some advertising cookies help select ads that are based on your interests. Others help prevent the same ad from continuously reappearing for you. We also use cookies to make it easy to share content from the website with your friends through your favorite social networks. Social media sites, may set cookies that recognize you when you view content on the website and allow you to share content across both the website and the social media site via the use of sharing settings. For further details, please check your social media site’s terms of use and privacy policy. We also work with third-party advertisers to give you access to travel content that might be of interest, and may set cookies on our Services to provide you with advertising that matches your interests and preferences. These third-party cookies collect information about your browsing behaviour and interaction with ads or the Services more generally This information also helps us limit the number of times you may see the same ads and improve your online experience.")}
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>

          <Box className="Cookie Consent Tool">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("10.Cookie Consent Tool")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("To give you control, we provide you with a Cookie Consent Tool which allows you to review first and third party cookies placed through our website and adjust your cookie settings, including whether or not to accept or decline such cookies.")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("You can access this Cookie Consent Tool at any time by clicking the Cookie Consent link at the bottom of every page or by modifying your preferences in our cookie banner. In addition, you can manage cookies through the settings of your internet browser You can have the browser notify you when you receive a new cookie delete individual cookies or delete all cookies.")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("Most advertising networks offer you a way to opt out of advertising cookies. See www.aboutads.info/choices and www.youronlinechoices.com for useful information on how to do this.")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("If you delete your cookies, your access to some functionality and areas of our Services might be degraded or restricted.")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("Our use of any information we collect through cookies is subject to this Statement, which is linked on every page of our website.")}
            </Typography>
          </Box>

          <Box className="Statement Changes and Notification">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("11.Statement Changes and Notification")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("We may update this Statement in the future. If we believe any changes are material, we will let you know by doing one or more of the following: sending you a communication about the changes placing a notice on the website and/or posting an updated Statement on the website. We will note at the top of this Statement when it was most recently updated. We encourage you to check back from time to time to review the most current version and to periodically review this Statement for the latest information on our privacy practices.")}
            </Typography>
          </Box>

          <Box className="Contact">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("12.Contact")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("If you have a data privacy request, such as a request to delete or access your data, please visit our dedicated privacy portal by clicking here. For general data privacy inquiries or questions concerning our Privacy and Cookies Statement, please contact our privacy team by clicking here.")}
            </Typography>
          </Box>

          <Box className="Europe">
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "bold",
              }}
            >
              {t("13.Europe")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
              }}
            >
              {t("This GDPR Statement applies to persons in the European Economic Area (“EEA”), including those based in the United Kingdom. This GDPR Statement supplements our Statement; however, where the Statement conflicts with the GDPR Statement, the GDPR Statement will prevail as to persons in the EEA.")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;
