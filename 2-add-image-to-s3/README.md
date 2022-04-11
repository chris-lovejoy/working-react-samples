# 2-add-image-to-s3


### Purpose
An extension on '1-add-local-image-via-backend', but now the image is pushed to an AWS S3 bucket.

Code modifications to part 1 inspired by [this video](https://www.youtube.com/watch?v=NZElg91l_ms).



### Instructions
npm install both backend and frontend

add AWS environment configs into backend/.env (as per [video](https://www.youtube.com/watch?v=NZElg91l_ms)). Note: need to configure AWS S3 bucket beforehand.

Go to 'localhost:3000' and upload image.

Image will be stored in local folder '/backend/images' as well as in the AWS S3 bucket specified.


