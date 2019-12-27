const dev = {
  STRIPE_KEY: "pk_test_Lvjc6qWPYpX1aAegx8TyEX4b00642iJc3w",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1pli300vdjcf4"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://0bama9soa1.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_OTqykFWxE",
    APP_CLIENT_ID: "1vbbn8fudbvhvkoecoin1v7hkc",
    IDENTITY_POOL_ID: "us-west-2:ab488850-53ab-4409-bc98-e29ed239f0f2"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_Lvjc6qWPYpX1aAegx8TyEX4b00642iJc3w",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-uzlw5ha03riz"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: " https://8tl835mjy7.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: " us-west-2_easPOIbpW",
    APP_CLIENT_ID: "1b3euvmccipt4mp6sru4kq93lp",
    IDENTITY_POOL_ID: "us-west-2:b4f79e00-6e74-4024-97db-95515a73c72a"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};