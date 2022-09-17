import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../../HeaderComponents/Header'
import Footer from "../../FooterComponents/Footer"
import { useTranslation } from 'react-i18next'

const TermsAndCondition = () => {

  const {t} = useTranslation()

  return (
    <Box>
      <Header />
     <Box className='mainBody'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2,
      padding:{xs:"0% 3% 0% 3%",md:"3% 5% 3% 5%"},
      width:{xs:"90%",md:"60%"}
     }}
     >
        <Typography
         sx={{
          fontSize:{xs:"20px",md:"24px"},
          fontWeight:"bold"
        }}
        >
          {t("MekoTourizm Terms of Use")}
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"18px",md:"20px"}
      }}
        >
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"18px",md:"20px"}
      }}
        >
          {t("Welcome to MekoTourizm!")}
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("We help users to research and book travel experiences, post opinions of those experiences, and engage in interactive travel forums. However, we are not a travel or tour agency, and we do not provide such experiences ourselves. When you make a booking, you will be purchasing a tour, ticket or other service directly from the third-party supplier.")}
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("These Terms of Use apply to any use of MekoTourizm's services. Please read these Terms of Use carefully, as they contain important information concerning your legal rights and limitations on these rights, as well as a section regarding applicable law and jurisdiction of disputes. By accessing or using MekoTourizm's services, you are indicating that you have read these Terms of Use and agree to be bound by them. If you do not agree with all of these Terms of Use, you are not permitted to access or use the services.")}
        </Typography>
        <Box className='ol'>
          <ol style={{fontSize:"18px"}}>
            <li>
              {t("Introduction")}
            </li>
<li>
  {t("Use of the Services")}
</li>
<li>
  {t("MekoTourizm Accounts")}
</li>
<li>
  {t("Website Prohibited Activities")}
</li>
<li>
  {t("Electronic Communications")}
</li>
<li>
  {t("Content")}
</li>
<li>
  {t("Links to Third Party Websites")}
</li>
<li>
  {t("Software on the Website")}
</li>
<li>
  {t("Products and Booking Reservations")}
</li>
<li>
  {t("Pricing")}
</li>
<li>
  {t("Currency Conversions")}
</li>
<li>
  {t("Payments")}
</li>
<li>
  {t("Payment Processing")}
</li>
<li>
  {t("Modifications or Cancellations by You")}
</li>
<li>
  {t("Other Modifications and Cancellations")}
</li>
<li>
  {t("Passports, Visas & Insurance")}
</li>
<li>
  {t("Our Liability")}
</li>
<li>
  {t("Your Liability")}
</li>
<li>
  {t("Worry-free Shore Excursions")}
</li>
<li>
  {t("MekoTourizm Tickets")}
</li>
<li>
  {t("General Provisions")}
</li>
          </ol>
        </Box>

    <Box className='Introduction'
    sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("1.Introduction")}
      </Typography>
      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("1.1 These terms of use, together with the Privacy Policy (collectively, the Terms of Use) set out the terms on which MekoTourizm, Inc. (a Delaware corporation, together with certain specified affiliates and subsidiaries:")} {t("MekoTourizm provides services (the Services) through MekoTourizm's booking platform (the Platform) as may be made available through our website (www.MekoTourizm.com, together with all related domains, white label and affiliate sites, mobile properties and related applications, collectively referred to as the Website) and over the telephone. When we refer to you, we mean any person that accesses or uses the Services. MekoTourizm is not a travel or tour agency, nor is it a supplier of tours, activities or experiences. When you make a booking, you are using the Platform to contract with third party suppliers.")}
      </Typography>
      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("1.2 If you wish to contact MekoTourizm, please visit our MekoTourizm Customer Care page giving information about ways to contact us. You can also write to us at the following address:")} {t("MekoTourizm, Inc., 400 1st Avenue, Needham, MA 02494, USA")}.</Typography>
    <Typography
    sx={{
      fontSize:{xs:"16px",md:"18px"}
    }}
    >
      {t("1.3 These Terms of Use govern your relationship with us in respect of your use of the Services, including any bookings that you make of any tour, ticket, attraction, activity and/or experience (described in these Terms of Use as an Experience) that is advertised on the Website and is made available by a third party supplier (each, a Product).")}
    </Typography>

    <Typography
    sx={{
      fontSize:{xs:"16px",md:"18px"}
    }}
    >
      {t("1.4 By using or accessing the Services, by booking a Product (Book, Booking), and/or creating an account on the Website (a MekoTourizm Account), you agree to be bound by these Terms of Use without modification, and you represent that you have read and understood them. In all Booking arrangements, the person making the Booking shall be deemed to have accepted these Terms of Use on behalf of all the persons named in the Booking.")}
    </Typography>

    <Typography
    sx={{
      fontSize:{xs:"16px",md:"18px"}
    }}
    >
      {t("1.5 We may update or otherwise modify these Terms of Use at any time, and you understand and agree that your continued access or use of the Services after such change signifies your acceptance of the updated Terms of Use. We will note the date that updates were last made to the Terms of Use at the top of this page, and the updated Terms of Use will take effect upon posting. It is your responsibility to return to this page periodically to review the most current version of the Terms of Use.")}
    </Typography>

    <Typography
    sx={{
      fontSize:{xs:"16px",md:"18px"}
    }}
    >
      {t("1.6 THE WEBSITE MAY CONTAIN TRANSLATIONS POWERED BY GOOGLE. GOOGLE DISCLAIMS ALL WARRANTIES RELATED TO THE TRANSLATIONS, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY, RELIABILITY, AND ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.")}
    </Typography>


    </Box>



    <Box className='Use of the Services'
    sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("2.Use of the Services")}
      </Typography>
      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("2.1 As a condition of your use of the Services, you represent and warrant that (i) all information supplied by you in the course of your use of the Services is true, accurate, current and complete, and (ii) you are 13 years of age or older in order to use the Website. MekoTourizm does not knowingly collect the information of anyone under the age of 13.")}
      </Typography>


      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("2.2 Your use of the Services is permitted by MekoTourizm only for personal, non-commercial use and/or to make legitimate requests to make a Booking of the Products offered. You agree not to use this Services to make any speculative, false or fraudulent requests or Bookings.")}
      </Typography>

      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("2.3 You further represent and warrant that you (a) are not currently suspended and have not previously been banned by MekoTourizm from using the Services; (b) are not acting on behalf of a competitor of MekoTourizm; (c) will not create more than one MekoTourizm Account; and (d) have full power and authority to enter into this legally binding agreement and in doing so will not violate any other agreement to which you are a party.")}
      </Typography>

      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("2.4 We retain the right at our sole discretion to deny access to the Services to anyone at any time and for any reason, including, but not limited to, for violation of these Terms of Use.")}
      </Typography>

      <Typography
      sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("2.5 In accessing or using the Website, you may be exposed to content that is offensive, indecent, inaccurate, objectionable, or otherwise inappropriate. MekoTourizm does not endorse such content, and cannot vouch for its accuracy. You therefore access and use the Website at your own risk.")}

</Typography>
    </Box>


    <Box className='Travel Accounts'
    sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
        <Typography
        sx={{
          fontSize:{xs:"16px",md:"18px"},
          fontWeight:"bold"
        }}
        >
          {t("3.MekoTourizm Accounts")}
        </Typography>
        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("3.1 You may need to create a MekoTourizm Account and provide information about yourself in order to use some of the features on the Website and other Services, including when you make a Booking. You are responsible for maintaining the confidentiality of your MekoTourizm Account password and log-in credentials (MekoTourizm Account Credentials). You are also solely responsible for all activities (including Bookings) that occur in connection with your MekoTourizm Account. You agree to notify us immediately of any unauthorized use of your MekoTourizm Account.")}
        </Typography>


        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("3.2 Your MekoTourizm Account is for your personal use only. You may not impersonate someone else (e.g., adopt the identity of a celebrity), create a MekoTourizm Account for any person other than yourself, provide an e-mail address or other personal details other than your own, or create multiple MekoTourizm Accounts.")}
        </Typography>


        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("3.3 We may terminate or suspend access to your MekoTourizm Account or your ability to use the Services, in whole or in part, at our sole discretion, for any or no reason, and without notice or liability of any kind. For example, we may terminate or suspend your MekoTourizm Account or ability to use the Services if you misuse the Website. Any such termination or suspension could prevent you from accessing your MekoTourizm Account, the Website, User Content (as defined in Section 6.1), Website Content (as defined in Section 4.1), and/or any other related information.")}
        </Typography>


        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("3.4 You may terminate your MekoTourizm Account at any time by contacting us to request that we close your MekoTourizm Account, and by discontinuing your use of any and all parts of the Services. If you close your MekoTourizm Account, we may continue to display your previously published User Content and are under no obligation to remove any of your User Content.")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("3.5 AS A USER OF THE SERVICES, YOU UNDERSTAND AND AGREE THAT:")} {t("(1) NEITHER MekoTourizm NOR ITS AFFILIATES WILL HAVE ANY LIABILITY TO YOU OR OTHERS FOR ANY UNAUTHORIZED BOOKINGS MADE USING YOUR MekoTourizm ACCOUNT AND/OR MekoTourizm ACCOUNT CREDENTIALS; AND (2) THE UNAUTHORIZED USE OF YOUR MekoTourizm ACCOUNT AND/OR MekoTourizm ACCOUNT CREDENTIALS COULD CAUSE YOU TO INCUR LIABILITY TO BOTH MekoTourizm AND OTHER USERS")}
          .</Typography>


    </Box>


    <Box className='Website Prohibited Activities'
    sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
        <Typography
        sx={{
          fontSize:{xs:"16px",md:"18px"},
          fontWeight:"bold"
        }}
        >
          {t("4.Website Prohibited Activities")}
        </Typography>
        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("4.1 The content and information on the Website (including, but not limited to, messages, data, information, text, music, sound, photos, graphics, video, maps, icons, software (including Software, as defined in Section 8.2), code or other material, and collectively described herein as the Website Content), as well as the infrastructure used to provide such Website Content, is proprietary to us. You agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell or re-sell any Website Content, or any products or services obtained from or through the Website. Any other use of the Website Content, products and/or services requires the prior written permission of MekoTourizm.")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("4.2 Additionally, you agree that you will not and will not assist or enable others to:")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("a. use the Website or the Website Content for any commercial or unlawful purpose;")}
          </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("b. access, monitor or copy any Website Content using any robot; spider, scraper or other automated means or any manual process to access, scrape, index, retrieve or otherwise use the Website or any Website Content for any purpose without our express written permission;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("b. access, monitor or copy any Website Content using any robot; spider, scraper or other automated means or any manual process to access, scrape, index, retrieve or otherwise use the Website or any Website Content for any purpose without our express written permission;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("d. take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure or makes excessive traffic demands on the Website;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("e. deep-link to any portion of the Website for any purpose without our express written permission;")}
        </Typography>


        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("f. frame, mirror or otherwise incorporate any part of the Website into any other website without our prior written authorization;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("g. attempt to modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any Software;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("h. use the Website to threaten, stalk, defraud, incite, harass, or advocate the harassment of another person, or otherwise interfere with another user's use of the Website;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("i. use the Website to submit or transmit spam, chain letters, contests, junk email, pyramid schemes, surveys, or other mass messaging, whether commercial in nature or not;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("j. use the Website in a manner that may create a conflict of interest, such as trading reviews with other business owners or writing or soliciting reviews;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("k. use the Website to promote bigotry or discrimination against protected classes;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("l. use the Website to violate any third-party right, including any breach of confidence,  trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("m. use the Website to submit or transmit pornography or illegal content;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("n. use the Website to solicit personal information from minors, or to harm or threaten to cause harm to, any person including minors;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("o. attempt to gain unauthorized access to the Website, user accounts, computer systems or networks connected to the Website through hacking, password mining or any other means;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("p. use the Website to transmit any computer viruses, worms, defects, Trojan horses or other items of a destructive nature (collectively, Viruses);")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("q. use any device, software or routine that interferes with the proper working of the Website, or otherwise attempt to interfere with the proper working of the Website;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("r. use the Website to violate the security of any computer network, crack passwords or security encryption codes;")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("s. disrupt or interfere with the security of, or otherwise cause harm to, the Website; or")}
        </Typography>

        <Typography
        sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("t. remove, circumvent, disable, damage or otherwise interfere with any security-related features of the Website, features that prevent or restrict the use or copying of Website Content, or features that enforce limitations on the use of the Website.")}
        </Typography>
    </Box>

    <Box className='Electronic Communications'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
        <Typography
         sx={{
          fontSize:{xs:"16px",md:"18px"},
          fontWeight:"bold"
        }}
        >
          {t("5.Electronic Communications")}
        </Typography>
        <Typography
         sx={{
          fontSize:{xs:"16px",md:"18px"}
        }}
        >
          {t("5.1. When you use the MekoTourizm Website, or send e-mails, text messages, and other communications from your desktop or mobile device to us, you are communicating with us electronically and agree that we may communicate with you in a variety of ways, such as by e-mail, in-app push notices, or by posting notices and messages on the Website. You may unsubscribe from marketing-related e-mails by emailing unsubscribe@MekoTourizm.com, however we may continue to send you non-marketing messages, such as messages related to any upcoming Bookings.")}
        </Typography>
    </Box>

    <Box className='Content'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
    <Typography
     sx={{
      fontSize:{xs:"16px",md:"18px"},
      fontWeight:"bold"
    }}
    >
      {t("6.Content")}
    </Typography>
    <Typography>
      {t("6.1. You and other users of the Website may contribute to the Website in a number of different ways, including submitting emails, writing reviews, making postings, uploading and posting photos or videos, making comments or suggestions, submitting ideas, filling out public profiles, rating other users' contributions and making other similar contributions or submissions to the Website and/or otherwise to MekoTourizm (collectively, User Content). We may use User Content in a number of different ways, including but not limited to displaying it on the Website, reformatting it, translating it into other languages, editing it for clarity and grammar, incorporating it into advertisements and other works, creating derivative works from it, promoting it, distributing it, and allowing others to do the same in connection with their own websites, mobile properties, applications, and media platforms.")}
    </Typography>


    <Typography>
      {t("6.2. By submitting User Content, you grant MekoTourizm and its affiliates a worldwide, non-exclusive, royalty-free, fully paid-up, perpetual, transferable, irrevocable and fully sub-licensable right to (a) use, reproduce, modify, adapt, translate, distribute, publish, create derivative works from and publicly display and perform such User Content throughout the world in any media, now known or hereafter devised, for any purpose; and (b) use the name that you submit in connection with such User Content. You acknowledge that MekoTourizm may choose to provide attribution of your User Content at our discretion. You further grant MekoTourizm the right to pursue at law any person or entity that violates your or MekoTourizm's rights in the User Content by a breach of these Terms of Use. You acknowledge and agree that User Content is non-confidential and non-proprietary. If it is determined that you retain moral rights (including rights of attribution or integrity) in the User Content, you hereby declare that (a) you do not require that any personally identifying information be used in connection with the User Content, or any derivative works of or upgrades or updates thereto; (b) you have no objection to the publication, use, modification, deletion and exploitation of the User Content by MekoTourizm or its licensees, successors and assigns; (c) you forever waive and agree not to claim or assert any entitlement to any and all moral rights of an author in any of the User Content; and (d) you forever release MekoTourizm, and its licensees, successors and assigns, from any claims that you could otherwise assert against MekoTourizm by virtue of any such moral rights.")}
    </Typography>


    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("6.3 MekoTourizm and its affiliates may display advertisements and other information adjacent to or included with your User Content on the Website. You are not entitled to any compensation for such advertisements. The manner, mode and extent of such advertising are subject to change without notice to you.")}
    </Typography>


      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("6.4 The Website may contain discussion forums, bulletin boards, review services or other forums in which you and other users of the Website may post User Content (Interactive Areas). Within such Interactive Areas, you are solely responsible for your use of such Interactive Areas and use them at your own risk. By using any Interactive Areas, you expressly agree not to post, upload to, transmit, distribute, store, create or otherwise publish through the Website any User Content that comprises or includes:")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("a. content that is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing, threatening, invasive of privacy or publicity rights, abusive, inflammatory, fraudulent or otherwise objectionable;")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("b. content that would constitute, encourage or provide instructions for a criminal offense, violate the rights of any party, or that would otherwise create liability or violate any local, state, national or international law, including, without limitation, the regulations of the U.S. Securities and Exchange Commission (SEC) or any rules of a securities exchange such as the New York Stock Exchange (NYSE), the American Stock Exchange or the NASDAQ;")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("c. content that may infringe any patent, trademark, trade secret or other intellectual or proprietary right of any party;")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("d. content that impersonates any person or entity or otherwise misrepresents your affiliation with a person or entity, including MekoTourizm;")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("e. promotions, political campaigning, advertising, contests, raffles, or solicitations;")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("f. private information of any third party, including, without limitation, surname (family name) address, telephone number, e-mail address, Social Security number and credit card number;")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("g. Viruses, corrupted data or other harmful, disruptive or destructive files;")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("h. content that is unrelated to the topic of the Interactive Area(s) in which such User Content is posted; or")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("i. content or links to content that, in the sole judgment of MekoTourizm, (a) violates the previous subsections herein, (b) is objectionable, (c) restricts or inhibits any other person from using or enjoying the Interactive Areas or the Website, and/or (d) may expose MekoTourizm or its affiliates or Website users to any harm or liability of any type.")}
        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("6.5 You alone are responsible for the User Content you submit. You assume all risks associated with such User Content, including anyone's reliance on its accuracy, completeness or usefulness, or any disclosure by you of information in such User Content that makes you personally identifiable. You represent that you own, or have the necessary permissions to use, and authorize the use of, such User Content as described herein. You may not imply that such User Content is in any way sponsored or endorsed by MekoTourizm.")}

          <Typography
           sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
          >
            {t("6.5 You alone are responsible for the User Content you submit. You assume all risks associated with such User Content, including anyone's reliance on its accuracy, completeness or usefulness, or any disclosure by you of information in such User Content that makes you personally identifiable. You represent that you own, or have the necessary permissions to use, and authorize the use of, such User Content as described herein. You may not imply that such User Content is in any way sponsored or endorsed by MekoTourizm.")}
          </Typography>

          <Typography
           sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
          >
            {t("6.6 MekoTourizm takes no responsibility and assumes no liability for any User Content posted, stored or uploaded by you or any third party, or for any loss or damage thereto, nor is MekoTourizm liable for any mistakes, defamation, slander, libel, omissions, falsehoods, obscenity, pornography or profanity you may encounter.")}
            </Typography>

          <Typography
           sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
          >
            {t("6.7 Although MekoTourizm has no obligation to screen, edit or monitor any User Content, MekoTourizm reserves the right, and has absolute discretion, to remove, screen, translate or edit without notice any User Content at any time and for any reason, and/or to have such actions performed by third parties on its behalf, and you are solely responsible for creating back-up copies and replacements of your User Content at your sole cost and expense. MekoTourizm has no obligation to retain or provide you with copies of your User Content, nor do we guarantee any confidentiality with respect to your User Content.")}
          </Typography>

          <Typography
           sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
          >
            {t("6.8 Any use by you of the Interactive Areas or other portions of the Website in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Interactive Areas and/or the Website.")}
          </Typography>

        </Typography>
      </Typography>
   
    </Box>

    <Box className='Links to Third Party Websites'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
        <Typography
         sx={{
          fontSize:{xs:"16px",md:"18px"},
          fontWeight:"bold"
        }}
        >
          {t("7.Links to Third Party Websites")}
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("7.1 The Website may contain hyperlinks to websites operated by parties other than MekoTourizm (Third Party Sites. Such hyperlinks are provided for your reference only. Their presence on the Website does not signify any endorsement by MekoTourizm of the material on such Third Party Sites nor any association with their operators.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("7.2 We do not control Third Party Sites and are not responsible for their contents, or the privacy or other practices of those that own and operate them.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("7.3 It is your responsibility to ensure that whatever hyperlinks you select and/or software you download (whether from the Website or Third Party Sites, and including Software, as defined in Section 8.2) are free of Viruses.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("7.4 In some cases you may be asked on a Third Party Site if you wish to link your profile on MekoTourizm to a profile on such Third Party Site. Choosing to do so is optional. If you decide to link your profiles and you later wish to disable such link, you should contact the Third Party Site.")}
        </Typography>


    </Box>


    <Box className='Software on the Website'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("8.Software on the Website")}
      </Typography>
    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("8.1 Software from the Website is further subject to United States export controls. No software from the Website may be downloaded or otherwise exported or re-exported (a) into (or to a national or resident of) Cuba, Iraq, Sudan, North Korea, Iran, Syria, or any other country to which the U.S. has embargoed goods, or (b) to anyone on the U.S. Treasury Department list of Specially Designated Nationals or the U.S. Commerce Department's Table of Deny Orders. By using the Website, you represent and warrant that you are not located in, under the control of, or a national or resident of any such country or on any such list.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("8.2 Any software (including, without limitation, all HTML, XML, Java code and Active X controls) that is made available to download from the Website (Software) is owned by  MekoTourizm, or MekoTourizm affiliates, or other third parties as identified. Your use of such Software is governed by the terms of the end user license agreement which accompanies, or is included with, the Software (License Agreement), if any. You may not install or use any Software that is accompanied by or includes a License Agreement unless you first agree to the License Agreement terms. For any Software made available for download on the Website not accompanied by a License Agreement, we hereby grant to you, the user, a limited, personal, non-transferable license to use the Software for viewing and otherwise using the Website in accordance with these Terms of Use and for no other purpose.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("8.3 You acknowledge and agree that all Software contained on the Website is protected by copyright laws and international treaty provisions. Any reproduction or redistribution of the Software is expressly prohibited, and may result in severe civil and criminal penalties. Violators will be prosecuted to the maximum extent possible.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("8.4 WITHOUT LIMITING THE FOREGOING, COPYING OR REPRODUCTION OF THE SOFTWARE TO ANY OTHER SERVER OR LOCATION FOR FURTHER REPRODUCTION OR REDISTRIBUTION IS EXPRESSLY PROHIBITED. THE SOFTWARE IS WARRANTED, IF AT ALL, ONLY IN ACCORDANCE WITH THE TERMS OF THE APPLICABLE LICENSE AGREEMENT.")}
    </Typography>

    </Box>

    <Box className='Copyright and Trademark Notices'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
        <Typography
         sx={{
          fontSize:{xs:"16px",md:"18px"},
          fontWeight:"bold"
        }}
        >
          {t("9.Copyright and Trademark Notices")}
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("9.1 Excluding Third Party Content, the Website and all content of the Website including, but not limited to, all visual interfaces, interactive features, custom graphics, design, computer code, products, software, compilation of other content (such as compilation of third party content), and other elements and components of the Website are:")}{t ("©2019 MekoTourizm, Inc. All rights reserved. MekoTourizm is not responsible for content on websites operated by parties other than MekoTourizm. All other product or service names or slogans displayed on the Website (including those of the Products) are registered and/or common law trademarks of MekoTourizm, Inc. and/or its suppliers or licensors, and may not be copied, imitated or used, in whole or in part, without the prior written permission of MekoTourizm or the applicable trademark holder. In addition, the look and feel of the Website, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of MekoTourizm and may not be copied, imitated or used, in whole or in part, without the prior written permission of MekoTourizm. All other trademarks, registered trademarks, product names and company names or logos mentioned in the Website are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by Travel.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("9.2 If you are aware of an infringement of either your brand or our brand, click here and follow the Copyright Complaint Policy instructions. ")}
        </Typography>
    </Box>


    <Box className='Products and Booking Reservations'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
        <Typography
         sx={{
          fontSize:{xs:"16px",md:"18px"},
          fontWeight:"bold"
        }}
        >
          {t("10.Products and Booking Reservations")}
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("10.1. MekoTourizm provides the Platform through which you can enter into a contract with a third party supplier of a Product (Supplier). MekoTourizm is not a supplier of any Product, and your contract for supply of any Product you Book will be directly between you and the applicable Supplier. In respect of each Booking, MekoTourizm acts as a disclosed agent on behalf of the Supplier, meaning that a Product listing represents an invitation to you to make an offer to a Supplier, and that we are free to accept or reject such offer on behalf of that Supplier. These Terms of Use govern your use of the Services, which includes your use of the Platform through which you may make such an offer to a Supplier. However, the provision of the Product you Book will be subject to the terms and conditions displayed on the Website in respect of such Product, any information made available to you during the Booking process, and the terms and conditions of the Supplier with whom you have a legal contract for the supply of the Product.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("10.2 If you make a Booking, you agree to review and be bound by the applicable Supplier's terms and conditions and any other rules or policies related to the Product (the Supplier Terms). Notwithstanding the foregoing, to the extent that the Supplier Terms conflict with these Terms of Use in respect of your legal relationship with MekoTourizm, these Terms of Use shall prevail. Your interactions with Suppliers are at your own risk. MekoTourizm will have no liability with respect to the acts, omissions, errors, representations, warranties, breaches or negligence of any Supplier or for any personal injuries, death, property damage, or other damages or expenses resulting from your interactions with any Supplier.")}
        </Typography>


        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("10.3 MekoTourizm is not a travel agency and does not provide or own any Experiences. Although MekoTourizm provides the Website with information about Products and facilitates Bookings, such actions do not in any way constitute MekoTourizm's sponsorship or approval of such Suppliers, or any affiliation between MekoTourizm and any Supplier. Although MekoTourizm Members may rate and review particular Products based on their own experiences, MekoTourizm does not endorse or recommend any Products. You agree that MekoTourizm is not responsible for the accuracy or completeness of information it obtains from Suppliers and/or that is displayed on the Website.")}
        </Typography>


    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >{t("10.4 By making a Booking, you warrant that you are at least 18 years of age, that you possess the legal authority to enter into both this binding agreement and a binding agreement with the Supplier, to use the Services, to purchase the Product, and that all information you supply is true and accurate. You further agree that you will use the Platform to make only legitimate Bookings for you and/or others for whom you are legally authorized to act.")}

</Typography>

    </Box>

    <Box className='Pricing'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("11.Pricing")}
      </Typography>
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("11.1 The price of each Product will be quoted on a per-person basis, unless otherwise specified.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("11.2 Prices are based on the local tariff at the time of quoting, converted at the prevailing foreign-exchange rate as determined by MekoTourizm. See Section 12 for more information about currency conversions.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("11.3 Price quotations are subject to change without notice, until a Booking has been made.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("11.4 Unless the Supplier has otherwise specified, prices do not include any local taxes or use-fees, including foreign departure, security, port charges, park fees, customs, immigration, agricultural, passenger-facility charges or international transportation tax.")}
        </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("11.5 Inclusions are determined by the Supplier. Prices do not include tips/gratuities; passport and visa fees; baggage and personal insurance; any items of a personal nature; taxes or duties; and any beverages or food that the Supplier has not specifically stated are included.")}
      </Typography>

    </Box>

    <Box className='Currency Conversions'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("12.Currency Conversionss")}
      </Typography>
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("12.1 If MekoTourizm provides a currency converter, currency rates are based on various publicly available sources and should be used as guidelines only. Rates are not verified, and actual rates may vary. Currency quotes may not be updated on a daily basis, and MekoTourizm and its affiliates do not warrant or guarantee accuracy. MekoTourizm shall not be liable to you if prices change due to currency fluctuations.")}

</Typography>
    </Box>

    <Box className='Payments'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("13.Payments")}
      </Typography>
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("13.1 When you make a Booking, MekoTourizm collects your payment information and processes your payment as described in Section 14. In doing so, MekoTourizm acts as the limited payment collection agent of the Supplier, collecting your payment for the applicable Product(s) on behalf of such Supplier. Full payment by credit or debit card is required to make a Booking, unless otherwise specified. The payee will be listed as MekoTourizm/Tripadvisor on your statement.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("13.2 The value of your Booking may be subject to taxes, duties, foreign transaction, currency exchange or other fees. Your bank or payment card company may convert the payment into the local currency and may charge fees, resulting in differences between the amount displayed through the Platform, and the final amount charged to you. MekoTourizm recommends that you contact your bank or card company if you have any questions concerning any applicable currency conversion or fees.")}
      </Typography>
    </Box>

    <Box className='Payment Processing'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("14.Payment Processing")}
      </Typography>
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("14.1 Under these Terms of Use, the payment processing services for the Services provided are provided by MekoTourizm Limited (on behalf of MekoTourizm Inc.), or by MekoTourizm Inc., or by MekoTourizm Systems Pty Limited, depending on the payment method used for your Booking. MekoTourizm Limited's registered office address is 7 Soho Square, London W1D 3QB, UK. MekoTourizm Systems Pty Limited's registered office address is Level 5, 219 Cleveland St, Redfern, NSW 2016, Australia.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("14.2 In the event you make a Booking using a credit or debit card and your payment is processed via a European acquirer, the payment processing services will be provided by MekoTourizm Limited on behalf of MekoTourizm Inc. (generally indicated by MekoTourizm Limited being referenced on your card statement). For a Booking made using any other payment method, the payment processing services will be provided by either MekoTourizm Inc. or MekoTourizm Systems Pty Limited (as stated on the applicable payment statement). If your payment was processed by MekoTourizm Limited or MekoTourizm Inc., the Terms of Use constitute an agreement between you and MekoTourizm Inc. If your payment was processed by MekoTourizm Systems Pty Limited, the Terms of Use are an agreement between you and MekoTourizm Systems Pty Limited, and the Services are provided to you by MekoTourizm Systems Pty Limited. For the avoidance of doubt, these Terms of Use never constitute an agreement between you and MekoTourizm Limited.")}
      </Typography>
    </Box>


    <Box className='Modifications or Cancellations by You'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
    <Typography
     sx={{
      fontSize:{xs:"16px",md:"18px"},
      fontWeight:"bold"
    }}
    >
      {t("15.Modifications or Cancellations by You")}
    </Typography>
    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("15.1 Once a Product has been purchased, your Booking cannot be changed by you or cancelled with a refund, unless otherwise stated in the terms and conditions applicable to such Product.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("15.2 The standard cancellation policy allows you to request a change to and/or cancel a Booking up until 24 hours before the start time of the Booking; or if the Experience does not have an explicit start time, the deadline to request a change or to cancel will generally be 11:59pm, two days before the start date. Timings are calculated in accordance with the time zone of the Experience.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("15.3 If any Product is designated as 'All Sales Final' or with materially similar messaging (which includes but is not limited to all group bookings booked through our Group Bookings Department), it is non-refundable, and it will not be possible to change or cancel it after making a Booking. A minority of Products have other, different cancellation policies. In all circumstances, you must check the cancellation policy contained in the applicable Product listing at the time of your Booking, which is the policy that will apply to and govern the terms of your cancellation and any refunds.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("15.4 Notwithstanding Sections 15.2 and 15.3, (a) requests for modifications and amendments to a Booking, including date change requests (collectively, a Change Request) should be made online through the 'Manage My Booking' section of the Website; and (b) if it is possible to implement a Change Request, MekoTourizm shall not charge a fee for doing so, as long as the Change Request is received by us by the deadline specified in the Product listing. Please note that a Supplier may charge a fee to accommodate a Change Request; in such circumstances, you will be required to pay such fee in order that MekoTourizm may successfully process your Change Request.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("15.5 All Change Requests shall be processed by MekoTourizm subject to the availability and agreement of the applicable Supplier. MekoTourizm does not guarantee the success of any Change Request. To the extent the Supplier is unwilling or unable to accept such Change Request, then your right to a refund (if any) shall be governed by the cancellation terms of your Booking.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("15.6 If you make a Booking using a promotion code, or if you accept a discount or special-offer price during the check-out process, you may invalidate your discount or special-offer price by making a Change Request after Booking.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("15.7 No refunds are available once an Experience has commenced, or in respect of any Product's package, accommodation, meals or any other services that have started to be utilized.")}
    </Typography>
    </Box>

    <Box className='Other Modifications and Cancellations'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
    <Typography
     sx={{
      fontSize:{xs:"16px",md:"18px"},
      fontWeight:"bold"
    }}
    >
      {t("16.Other Modifications and Cancellations")}
    </Typography>
    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("16.1 Occasionally a Supplier may make a change to a Product after your purchase, including but not limited to the date, price, inclusions, coverage, age requirements, and/or any other Product features and/or requirements. As a result, MekoTourizm (acting on the Supplier’s behalf), reserves the right to cancel, change or substitute any Product that you have purchased, at any time, for any reason. If the change proposed by the Supplier is material (for example, a change in dates and/or a significant change to the itinerary), and you are dissatisfied with the alternative that is offered, you will be entitled to a full refund of the original purchase price.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("16.2 We may decide, in our sole discretion, that it is necessary or desirable for the protection of our interests, the Supplier's interests and/or your interests, to withdraw our Services resulting in an override of the Product's cancellation policy and the effective cancellation of a Booking. We may also determine, in our sole discretion, to arrange refund to you part or all of the amounts charged to you. You agree that we and the applicable Supplier shall have no liability for such cancellations or refunds.")}
</Typography>
    </Box>

    <Box className='Passports, Visas & Insurance'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("17.Passports, Visas & Insurance")}
      </Typography>
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("17.1 When you make a Booking, you are responsible for ensuring that you meet all foreign entry requirements and that your travel documents, including passports and visas, are in order.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("17.2 For applicable passport and visa requirements, you should consult the relevant embassy or consulate for information. Such requirements may change at any time, and it is your responsibility to check for up-to-date information before making a Booking and before your departure. MekoTourizm accepts no liability in connection with any person who is refused entry onto a flight or into any country, including countries such person may just be passing through en route to their destination.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("17.3 As visa and health requirements are subject to change without notice, MekoTourizm recommends that you verify health and visa requirements with the appropriate consulate prior to departure. It is also your responsibility to consult your physician for current recommendations on inoculations before you travel internationally, and to ensure that you meet all health entry requirements and follow all medical guidance related to your trip.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("17.4 MekoTourizm strongly recommends that you purchase a comprehensive travel insurance policy prior to departure to protect your Product purchase. If you cancel your trip or significantly alter travel dates, your travel insurance policy may reimburse the cost of cancellation fees and related expenses. Please review your travel insurance policy carefully for related terms and conditions.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("17.5 Although most travel, including travel to international destinations, is completed without incident, travel to certain destinations may involve greater risk than others. MekoTourizm urges customers to investigate and review travel prohibitions, warnings, announcements and advisories issued by the United States Government and destination country governments prior to booking travel to international destinations. Information on conditions in various countries and the level of risk associated with travel to particular international destinations can be found at www.state.gov, www.tsa.gov, www.dot.gov, www.faa.gov, www.cdc.gov, www.treas.gov/ofac and www.customs.gov.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("17.6 MekoTourizm DOES NOT REPRESENT OR WARRANT THAT TRAVEL TO ANY DESTINATION IS ADVISABLE OR WITHOUT RISK, AND MekoTourizm IS NOT LIABLE FOR DAMAGES OR LOSSES THAT MAY RESULT FROM TRAVEL TO SUCH DESTINATIONS.")}
      </Typography>
    </Box>


    <Box className='Our Liability'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("18.Our Liability")}
      </Typography>
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("18.1 PLEASE READ THIS SECTION CAREFULLY. THIS SECTION LIMITS MekoTourizm'S LIABILITY TO YOU FOR ISSUES THAT MAY ARISE IN CONNECTION WITH YOUR USE OF THE SERVICES. IF YOU DO NOT UNDERSTAND THE TERMS IN THIS SECTION OR ELSEWHERE IN THESE TERMS OF USE, PLEASE CONSULT A LAWYER FOR CLARIFICATION BEFORE ACCESSING OR USING THE SERVICES.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("18.2 THE INFORMATION, CONTENT, SOFTWARE, PLATFORM, AND SERVICES PROVIDED BY MekoTourizm MAY INCLUDE INACCURACIES OR ERRORS, INCLUDING IN RELATION TO RESERVATION AVAILABILITY AND PRICING ERRORS. MekoTourizm, ITS PARENT, SUBSIDIARIES AND CORPORATE AFFILIATES (COLLECTIVELY, THE MekoTourizm GROUP COMPANIES) DO NOT GUARANTEE THE ACCURACY OF, AND DISCLAIM ALL LIABILITY FOR, ANY ERRORS OR OTHER INACCURACIES RELATING TO THE INFORMATION AND DESCRIPTION OF THE PRODUCTS AND OTHER SERVICES (INCLUDING, WITHOUT LIMITATION, THE PRICING, AVAILABILITY, PHOTOGRAPHS, FEATURES, INCLUSIONS AND EXCLUSIONS, GENERAL PRODUCT DESCRIPTIONS, REVIEWS AND RATINGS, ETC.). IN ADDITION, MekoTourizm EXPRESSLY RESERVES THE RIGHT TO CORRECT ANY AVAILABILITY AND PRICING ERRORS AND/OR ON BOOKINGS MADE UNDER AN INCORRECT PRICE.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("18.3 THE MekoTourizm GROUP COMPANIES MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY OF THE INFORMATION, CONTENT, SOFTWARE, PLATFORM, PRODUCTS, AND OTHER SERVICES FOR ANY PURPOSE, AND THE INCLUSION OR OFFERING OF ANY PRODUCTS OR SERVICES DOES NOT CONSTITUTE ANY ENDORSEMENT OR RECOMMENDATION OF SUCH PRODUCTS OR SERVICES BY THE MekoTourizm GROUP COMPANIES. ALL SUCH INFORMATION, CONTENT, SOFTWARE, PLATFORM, PRODUCTS, AND SERVICES ARE PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND. THE MekoTourizm GROUP COMPANIES DISCLAIM ALL WARRANTIES AND CONDITIONS THAT THE PLATFORM IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. MekoTourizm HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, CONTENT, SOFTWARE, PLATFORM, PRODUCTS, AND SERVICES, INCLUDING ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, TO THE EXTENT PERMITTED BY LAW.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("18.4 THE SUPPLIERS ARE INDEPENDENT CONTRACTORS AND NOT AGENTS OR EMPLOYEES OF ANY OF THE MekoTourizm GROUP COMPANIES. THE MekoTourizm GROUP COMPANIES ARE NOT LIABLE FOR THE ACTS, ERRORS, OMISSIONS, REPRESENTATIONS, WARRANTIES, BREACHES, NEGLIGENCE OR MISCONDUCT OF ANY SUCH SUPPLIERS OR FOR ANY PERSONAL INJURY, DEATH, PROPERTY DAMAGE, OR OTHER DAMAGES OR EXPENSES RESULTING THEREFROM OR OTHERWISE ARISING FROM ANY BOOKING OR USE OF A PRODUCT. THE MekoTourizm GROUP COMPANIES HAVE NO LIABILITY AND WILL MAKE NO REFUND IN THE EVENT OF ANY DELAY, CANCELLATION, OVERBOOKING, STRIKE, FORCE MAJEURE OR OTHER CAUSES BEYOND THEIR DIRECT CONTROL, AND THEY HAVE NO RESPONSIBILITY FOR ANY ADDITIONAL EXPENSE, OMISSIONS, DELAYS, RE-ROUTING OR ACTS OF ANY GOVERNMENT OR AUTHORITY.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("18.5 IN NO EVENT SHALL THE MekoTourizm GROUP COMPANIES (OR ANY OF THEIR OFFICERS, DIRECTORS AND AFFILIATES) BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOSS OF DATA OR INFORMATION OR COSTS TO PROCURE SUBSTITUTE GOODS OR SERVICES) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH, A PRODUCT OR A BOOKING, OR YOUR ACCESS TO, DISPLAY OF OR USE OF THE SERVICES WHETHER BASED ON A THEORY OF NEGLIGENCE, CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, AND EVEN IF MekoTourizm HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("18.6 If any MekoTourizm Group Company is found liable for any loss or damage that arises out of or is in any way connected with your use of the Services or with a Booking or use of a Product, then the MekoTourizm Group Companies' liabilities will in no event exceed, in the aggregate, the greater of (a) the sum paid to MekoTourizm in respect of the Booking giving rise to the claim, or (b) one hundred dollars (US $100.00).")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("18.7 The limitation of liability set forth in this Section 18 reflects the allocation of risk between the parties. The limitations specified in this Section will survive and apply even if any limited remedy specified in these Terms of Use is found to have failed of its essential purpose. The limitations of liability provided in these Terms of Use inure to the benefit of the MekoTourizm Group Companies.")}

</Typography>
    </Box>

    <Box className='Your Liability'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
    <Typography
     sx={{
      fontSize:{xs:"16px",md:"18px"},
      fontWeight:"bold"
    }}
    >
      {t("19.Your Liability")}
    </Typography>
    <Typography
     sx={{
      fontSize:{xs:"16px",md:"18px"}
    }}
    >
      {t("19.1 You agree to defend and indemnify MekoTourizm and the MekoTourizm Group Companies and all of their respective officers, directors, employees and agents from and against any claims, causes of action, demands, suits, proceedings, investigations, losses, damages, fines, penalties, fees, expenses, costs and any other liabilities of any kind or nature including but not limited to reasonable legal and accounting fees, arising out of or related to: a. your breach of these Terms of Use or the documents referenced herein; b. your violation of any law, rule, regulation or guideline; c. your violation, infringement or misappropriation of the rights of a third party, including without limitation any rights of publicity or privacy; d. your use of the Services (including the Website); e. your Booking or use of any Product; or f. your negligence or willful misconduct.")}
    </Typography>
    </Box>  


      <Box className='Worry-free Shore Excursions'
       sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start",
        rowGap:2
      }}
      >
        <Typography
         sx={{
          fontSize:{xs:"16px",md:"18px"},
          fontWeight:"bold"
        }}
        >
          {t("20.Worry-free Shore Excursions")}
        </Typography>
        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("20.1 For Products noted as a Worry-free Shore Excursion, if you (a) purchase such a Product for redemption while in a particular port-of-call, and (b) are not returned by the applicable Supplier to the ship in time to board, MekoTourizm will (subject to Sections 20.2 and 20.3) arrange the necessary transport to the next port-of-call.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("20.2 The policy set forth in this Section 20.1 - 20.4 applies only when, through no fault or action of your own, you are not returned to the ship in time to board. The policy is void in instances where delay is caused by your own actions and/or you have deviated from the Experience that you Booked.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("20.3 In order to benefit from this policy, you must supply MekoTourizm with correct arrival and departure ship information and ensure there is enough time (minimum 2 hours) between the Experience end time and the ship departure time. You must contact MekoTourizm directly and as soon as possible to request next port-of-call transportation arrangements as you cannot book your own travel without voiding this policy.")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("20.4 Subject to your eligibility, MekoTourizm will facilitate the booking of travel for you to the next port of call (not to exceed US$1,000 per person).")}
        </Typography>

        <Typography
         sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
        >
          {t("20.5 In addition to the protection offered pursuant to Section 20.1 - 20.4, if your ship misses a port-of-call or is delayed beyond the commencement time of your Worry-free Shore Excursion, simply contact MekoTourizm within 14 days. Pending verification of the ship's actual itinerary, we will issue you a refund.")}

</Typography>
      </Box>

    <Box className='Travel Tickets'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"},
        fontWeight:"bold"
      }}
      >
        {t("21.MekoTourizm Tickets")}
      </Typography>
      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("21.1 You will receive a MekoTourizm-branded ticket (or, alternatively a voucher from the Supplier) (in each case, a Ticket) for each Product you you Book, with such Ticket being issued on behalf of the applicable Supplier. In order to access and print your Ticket, you will be directed to a secure webpage hosted by MekoTourizm that contains a link to your Ticket. Certain Bookings will result in your being provided with an electronic Ticket as well as or instead of a paper Ticket.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("21.2 You must provide the original, authentic Ticket to the applicable Supplier in order to redeem your Product. Your Booking cannot be honored or redeemed without presenting a valid Ticket. Ensure you read the terms and conditions relating to your Booking in order to understand what will be required by the Supplier by way of Ticket presentation.")}
      </Typography>

      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("21.3 For security purposes, when redeeming your Ticket you must present a valid photo ID and sign the Ticket.")}
      </Typography>


      <Typography
       sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
      >
        {t("21.4 In some cases, a Supplier may also require that you present the payment card used to purchase your Product at the time of redemption. This typically applies to attraction and show tickets. You should be advised at check-out whether or not this will be required. If you have questions about such a requirement, contact MekoTourizm's Customer Care team.")}
      </Typography>
    </Box>

    <Box className='General Provisions'
     sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start",
      rowGap:2
    }}
    >
    <Typography
     sx={{
      fontSize:{xs:"16px",md:"18px"},
      fontWeight:"bold"
    }}
    >
      {t("21.General Provisions")}
    </Typography>
    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("22.1 You agree that no joint venture, agency, partnership, or employment relationship exists between you and any of the MekoTourizm Group Companies as a result of these Terms of Use or use of the Services.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("22.2 MekoTourizm's performance of these Terms of Use is subject to existing laws and legal process, and nothing contained in these Terms of Use limits MekoTourizm's right to comply with law enforcement or other governmental or legal requests or requirements relating to your use of the Services or information provided to or gathered by MekoTourizm with respect to such use. To the extent allowed by applicable law, you agree that you will bring any claim or cause of action arising from or relating to your access or use of the Services within two (2) years from the date on which such claim or action arose or accrued or such claim or cause of action will be irrevocably waived.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("22.3 If any part of these Terms of Use is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remaining provisions in these Terms of Use shall continue in effect.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >
      {t("22.4 These Terms of Use (and any other terms and conditions referenced herein) constitute the entire agreement between you and MekoTourizm with respect to the Services and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between you and MekoTourizm with respect to the Services. A printed version of these Terms of Use and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to these Terms of Use to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.")}
    </Typography>

    <Typography
     sx={{
        fontSize:{xs:"16px",md:"18px"}
      }}
    >{t("22.5 Any rights not expressly granted herein are reserved.")}

</Typography>
    </Box>


    

     </Box>
     <Footer />
    </Box>
  )
}

export default TermsAndCondition