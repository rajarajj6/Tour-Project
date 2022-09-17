import { Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const ArtCulture = () => {


    const [arts_culture, setArts_culture] = useState(false);
    const [classes_workspaces, setclasses_workspaces] = useState(true);
    const [food_drink, setFood_drinnk] = useState(true);
    const [likelyToSellOut, setLikelyToSellOut] = useState(true);
    const [outDoorActivity, setOutDoorActivity] = useState(true);
    const [seasonal_specialOcation, setSeasonal_specialOcation] = useState(true);
    const [ticketsAndPasses, setTicketsAndPasses] = useState(true);
    const [tours_sightseeing, setTours_sightseeing] = useState(true);
    const [travel_Transportation, setTravel_Transportation] = useState(true);
    const [uniqueExperience, setUniqueExperience] = useState(true);

    const [FirstArtState, setFirstArtState] = useState("");
    const [FirstClass_workshopState, setFirstClass_workshopState] = useState("");
    const [FirstFood_DrinkState, setFirstFood_DrinkState] = useState("");
    const [FirstOutDoorActivitesState, setFirstOutDoorActivitesState] =
      useState("");
    const [FirstSeasonl_SpecialState, setFirstSeasonl_SpecialState] =
      useState("");
    const [FirstTickets_PassesState, setFirstTickets_PassesState] = useState("");
    const [FirstTour_sightseeingState, setFirstTour_sightseeingState] =
      useState("");
    const [FirstTravel_TransportState, setFirstTravel_TransportState] =
      useState("");
  
  
  const [secondArtState , setsecondArtState]  = useState(true)
  const [secondArtDesignState , setsecondArtDesignState]  = useState(true)
  

  return (
        <Box>
        {
                    !arts_culture ? <Box>
                  {FirstArtState == "" ? (
                    <Box className="mainAllArtAndCulture">
                      <Box
                        className="mainBody"
                        sx={{
                          fontSize: "30px",
                          display: "flex",
                          flexDirection: "column",
                          rowGap: 3,
                        }}
                      >
                        {/* arts and Culture */}
                        <Box
                          className="Art & Culture"
                          onClick={() =>
                            setFirstArtState("AllArtAndCultureClasses")
                          }
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  // textDecoration: "underLine",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              Art & Culture classes
                            </Typography>
                            <Box className="arrows" onClick={()=>{setsecondArtState(!secondArtState); }}>
                        <KeyboardArrowDownIcon
                          sx={{
                            display: secondArtState ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !secondArtState ? "flex" : "none",
                          }}
                        />
                      </Box>
                          </Box>
                        </Box>

                        {/* arts and Design */}
                        <Box
                          className="Art & Design"
                          onClick={() => setFirstArtState("ArtsAndDesign")}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  // textDecoration: "underLine",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              Art & Design
                            </Typography>
                            <Box className="arrows" onClick={()=>{setsecondArtDesignState(!secondArtDesignState); }}>
                        <KeyboardArrowDownIcon
                          sx={{
                            display: secondArtDesignState ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !secondArtDesignState ? "flex" : "none",
                          }}
                        />
                      </Box>
                          </Box>
                        </Box>

                        {/* Culture */}
                        <Box
                          className="Culture"
                          onClick={() => setFirstArtState("Culture")}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  // textDecoration: "underLine",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              Culture
                            </Typography>
                            <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                          </Box>
                        </Box>

                        {/* pop Culture */}
                        <Box
                          className="Pop Culture"
                          onClick={() => setFirstArtState("PopCulture")}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  // textDecoration: "underLine",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              Pop Culture
                            </Typography>
                            <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                          </Box>
                        </Box>

                        {/* Shows and Performance */}
                        <Box
                          className="Shows and Performance"
                          onClick={() =>
                            setFirstArtState("ShowsAndPerformances")
                          }
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  // textDecoration: "underLine",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              Shows and Performance
                            </Typography>
                            <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                          </Box>
                        </Box>

                        {/* Traditional Wellness */}
                        <Box
                          className=" Traditional Wellness"
                          onClick={() =>
                            setFirstArtState("TraditionalWellness")
                          }
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography
                              sx={{
                                "&:hover": {
                                  // textDecoration: "underLine",
                                  cursor: "pointer",
                                },
                              }}
                            >
                              Traditional Wellness
                            </Typography>
                            <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ) : FirstArtState == "AllArtAndCultureClasses" ? (
                    <Box
                      className="AllArtAndCultureClasses"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3,
                        paddingLeft: "10%",
                      }}
                    >
                      <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between"
                      }}>
                      <Typography>Art And Culture Classes</Typography>
                      <Box className="arrows" onClick={()=>{setsecondArtState(!secondArtState); setFirstArtState(!FirstArtState) }}>
                        <KeyboardArrowDownIcon
                          sx={{
                            display: secondArtState ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !secondArtState? "flex" : "none",
                          }}
                        />
                      </Box>
                      </Box>
                      <Typography>Art Classes</Typography>
                      <Typography>Craft Classes</Typography>
                      <Typography>Dance Lessons</Typography>
                      <Typography>Engllish Lessons</Typography>
                      <Typography>Music Classes</Typography>
                      <Typography>Painting Classes</Typography>
                      <Typography>pottery Classes</Typography>
                    </Box>
                  ) : FirstArtState == "ArtsAndDesign" ? (
                    <Box
                      className="ArtsAndDesign"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3,
                        paddingLeft: "10%",
                      }}
                    >
                      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} onClick={()=>{setsecondArtDesignState(!secondArtDesignState); setFirstArtState(!FirstArtState) }}>
                        <Typography>Arts & Design</Typography>
                      <Box className="arrows" >
                        <KeyboardArrowDownIcon
                          sx={{
                            display: !secondArtDesignState ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: secondArtDesignState ? "flex" : "none",
                          }}
                        />
                      </Box>
                      </Box>
                      <Typography>Architecture Tours</Typography>
                      <Typography>Art Galleries</Typography>
                      <Typography>Art Tours</Typography>
                      <Typography>Musseums</Typography>
                    </Box>
                  ) : FirstArtState == "Culture" ? (
                    <Box
                      className="Culture"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3,
                        paddingLeft: "10%",
                      }}
                    >
                     <Box>
                      <Typography>All Culture</Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                     </Box>
                      <Typography>Ancient Ruins</Typography>
                      <Typography>Archaeology Tours </Typography>
                      <Typography>Castle Tours</Typography>
                      <Typography>Costume Dress Experiences</Typography>
                      <Typography>Cultural Tours</Typography>
                      <Typography>Factory Tours</Typography>
                      <Typography>Fashion Tours</Typography>
                      <Typography>Historical Tours</Typography>
                      <Typography>Literary Tours</Typography>
                      <Typography>Musseums</Typography>
                      <Typography>Music Tours</Typography>
                      <Typography>Photography Tours</Typography>
                      <Typography>Religious Tours</Typography>
                      <Typography>Underground Tours</Typography>
                    </Box>
                  ) : FirstArtState == "PopCulture" ? (
                    <Box
                      className="PopCulture"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3,
                        paddingLeft: "10%",
                      }}
                    >
                     <Box>
                      <Typography>Pop Culture</Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                     </Box>
                      <Typography>Crime Tours</Typography>
                      <Typography>Game Of Thrones Tour</Typography>
                      <Typography>Ghost Tours</Typography>
                      <Typography>Harry Potter Tours</Typography>
                      <Typography>Movies Tours</Typography>
                      <Typography>Street Art Tours</Typography>
                      <Typography>TV Tours</Typography>
                    </Box>
                  ) : FirstArtState == "ShowsAndPerformances" ? (
                    <Box
                      className="ShowsAndPerformances"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3,
                        paddingLeft: "10%",
                      }}
                    >
                     <Box>
                      <Typography>Shows And Performances</Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                     </Box>
                      <Typography>Adults Only Shows</Typography>
                      <Typography>Cabaret</Typography>
                      <Typography>Circus Shows</Typography>
                      <Typography>Concerts</Typography>
                      <Typography>Dinner And Show Tickets</Typography>
                      <Typography>Family - frinedly Shows</Typography>
                      <Typography>Fashion Shows</Typography>
                      <Typography>Festivals</Typography>
                      <Typography>Jazz Shows</Typography>
                      <Typography>Musicals</Typography>
                      <Typography>NightLife</Typography>
                      <Typography>Oprea Performances</Typography>
                      <Typography>Shows</Typography>
                      <Typography>TheaterShows</Typography>
                    </Box>
                  ) : FirstArtState == "TraditionalWellness" ? (
                    <Box
                      className="TraditionalWellness"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3,
                        paddingLeft: "10%",
                      }}
                    >
                      <Box>
                      <Typography>Traditional Wellness</Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                      </Box>
                      <Typography>Spas</Typography>
                    </Box>
                  ) : null}
                    </Box>
                  : null
                  }
        </Box>
  )
}

export default ArtCulture