import { colors } from "../../theme/colors";

import MobileChat from "@modules//home/sections/Banner/MobileChat";
import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
// import Image from "next/image";
import { PrimaryButton } from "../../components/ButtonComponent/PrimaryButton";
import { BodyText } from "../../components/Text/BodyText";
import { DisplayText } from "../../components/Text/DisplayText";
import { FancyText } from "../../components/Text/FancyText";
import { SubheadingText } from "@elevarsalud/ravel.ui.text.subheading-text";
// import { useIsMobile } from "src/util/mediaquery";
import styles from "./styles";
import { pxToVh, pxToVw } from "../../util/pxConverter";
import { breakpoints } from "../../theme/breakpoints";

type BannerProps = {
  onLearnMore?: () => void;
  handleOpenWA?: () => void;
};

const Banner = ({ handleOpenWA, onLearnMore }: BannerProps) => {
  //   const isMobile = useIsMobile();

  const laptop = useMediaQuery(`(max-width:${breakpoints.LAPTOP})`);
  const tablet = useMediaQuery(`(max-width:${breakpoints.TABLET})`);
  const mobile = useMediaQuery(`(max-width:${breakpoints.MOBILE_LARGE})`);

  return (
    <Box sx={styles.root}>
      <Container sx={styles.container} maxWidth="xl">
        <Grid sx={styles.bannerCell} container>
          <Grid item md={6} sm={12}>
            {!isMobile && <MobileChat />}
          </Grid>
          <Grid item md={6} sm={12} width="90vw">
            <DisplayText
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="900"
              sx={{ letterSpacing: "0" }}
            >
              <Box component="span" sx={styles.yellowText}>
                Real Answers
              </Box>{" "}
              from Real Doctors
            </DisplayText>
            <SubheadingText
              sx={styles.subtitleBannerText({ mobile: mobile })}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="1200"
            >
              Send your question via WhatsApp, and get a video response back.
            </SubheadingText>

            {isMobile && <MobileChat />}

            <Stack
              direction="row"
              justifyContent={
                mobile
                  ? "space-between"
                  : tablet
                  ? "space-evenly"
                  : "flex-start"
              }
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="1500"
              gap={!isMobile && "1rem"}
              sx={{ marginTop: isMobile && pxToVh(-100) }}
            >
              <Box sx={styles.pointerTextWrap}>
                <PrimaryButton
                  onClick={handleOpenWA}
                  buttonSize="large"
                  sx={{
                    width: "100%",
                    minWidth: isMobile ? pxToVw(165) : pxToVw(129),
                  }}
                >
                  <BodyText textType="heavy">Ask a doctor</BodyText>
                </PrimaryButton>
                <Box
                  sx={styles.pointerText}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="1800"
                >
                  <Box sx={styles.arrowIcon}>
                    <Image
                      width={40}
                      height={40}
                      src="/images/common/icons/arrow-topleft.svg"
                    />
                  </Box>
                  <FancyText sx={styles.btnCaption}>
                    Fast, free and confidential
                  </FancyText>
                </Box>
              </Box>
              <PrimaryButton
                buttonSize="large"
                buttonColor="white"
                onClick={onLearnMore}
                sx={{
                  border: `1px solid ${colors.getPrimary(6)}`,
                  minWidth: isMobile ? pxToVw(165) : pxToVw(122),
                }}
              >
                <BodyText textType="heavy">Learn more</BodyText>
              </PrimaryButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
