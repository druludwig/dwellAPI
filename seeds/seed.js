const sequelize = require("../config/connection");
const db = require("../models");

const plantSeeds = async () => {
  await sequelize.sync({ force: true });

  // Create the user
  await db.User.bulkCreate([
    {
      name: "Dru"
    }
  ]);

  // Create some tasks
  await db.Task.bulkCreate([
    {
      name: "Change smoke detector batteries",
      date_due: "2021-09-08",
      priority_high: "Yes",
      description: "Change batteries in all smoke detectors. Laundry room detector uses AA batteries.",
      req_good_weather: "No",
      time_req: 15,
      num_people_req: 1,
      cost: 6,
      req_items: "6 9V Batteries, 2 AA Batteries",
    },
    {
      name: "Clean washing machine filter",
      date_due: "2021-10-02",
      priority_high: "No",
      description: "Users manual is in laundry room drawer. Follow instructions for cleaning pump filter.",
      req_good_weather: "No",
      time_req: 15,
      num_people_req: 1,
      cost: 0,
      req_items: "Bucket to collect water, old towel"
    },
    {
      name: "Inspect exterior siding",
      date_due: "2021-09-06",
      priority_high: "Yes",
      description: `Walk perimeter of house and inspect siding and trim for any separations. In case of separation, clean with damp cloth and fill with caulk. After 24 hours, touch up with paint in garage labeled "Exterior New 2018".`,
      req_good_weather: "Yes",
      time_req: 45,
      num_people_req: 2,
      cost: 10,
      req_items: "Exterior calking, caulking gun, touch up paint"
    },
    {
      name: "Clear brush around work shed",
      date_due: "2021-10-02",
      priority_high: "Yes",
      description: "Clear out ferns and other brush to maintain a 5 foot clearing around shed. Spray for pests around perimeter when done.",
      req_good_weather: "Yes",
      time_req: 120,
      num_people_req: 1,
      cost: 5,
      req_items: "Work gloves, BioAdvanced Carpenter Ant Killer concentrate, pump pressure sprayer"
    },

  ]);

  // Create some tasks
  await db.Job.bulkCreate([
    {
      name: "Under Home Inspection",
      date_due: "2022-01-02",
      priority_high: "Yes",
      includes: "An underhome inspection of the entire crawl space.",
      not_included: "Outdoor perimeter pest spraying is not needed.",
      target_cost: 250
    },
    {
      name: "Septic Service",
      date_due: "2023-06-02",
      priority_high: "No",
      includes: "Standard pumping service.",
      not_included: "Camera inspection not required.",
      target_cost: 330
    },
    {
      name: "Gutter Cleaning",
      date_due: "2021-11-16",
      priority_high: "Yes",
      includes: "Cleaning of gutters. Inspection of downspouts.",
      not_included: "Moss removal or moss treatment not required.",
      target_cost: 150
    },
    {
      name: "Furnace Inspection",
      date_due: "2022-05-21",
      priority_high: "No",
      includes: "The free annual inspection included with furnace replacement in 2019. Filter replacement with allergy reducing filter.",
      not_included: "N/A",
      target_cost: 0
    },

  ]);

  console.log('Seed Data is Planted 🌱');
  process.exit(0);
};

plantSeeds()