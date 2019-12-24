export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "notes-appl1-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://vkgm09tlyh.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ZHz5urTMK",
    APP_CLIENT_ID: "e46h47tigp2na43eq8kdiuoec",
    IDENTITY_POOL_ID: "us-west-2:2ce0067b-c1b3-4e53-b0e2-f0afbb3e9418"
  }
};