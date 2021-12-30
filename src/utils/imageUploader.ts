import ReactS3Client from 'react-aws-s3-typescript';
import dotenv from 'dotenv';
dotenv.config();

const AWSConfig = {
  bucketName: 'duxcord',
  region: 'ap-northeast-2',
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY!,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY!,
};

const s3 = new ReactS3Client(AWSConfig);

export const uploadImage = async (file: File) => {
  if (!file) throw '이미지가 선택되지 않았습니다.';
  const timestamp = new Date().toLocaleString();
  const uploadName = `${timestamp}-${file.name}`.replaceAll(' ', '').replaceAll(':', '-');
  const res = await s3.uploadFile(file, uploadName);
  return res.location;
};
