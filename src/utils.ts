import type { GetProp, UploadProps } from 'antd';
import { message } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export const isJsonString = (data: string) => {
  try {
    JSON.parse(data);
  }
  catch {
    return false;
  }
  return true;
};

export const getBase64 = (img: FileType) => {
  const reader = new FileReader();
  reader.readAsDataURL(img);
};

export const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export const getItem = (label: string, key: string, icon: any, children?: any, type?: string) =>{
  return {
    label,
    key,
    icon,
    children,
    type
  }
}