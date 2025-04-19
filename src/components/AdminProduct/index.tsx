import React from "react";
import { WrapperHeader } from "./AdminProduct.style";
import { Button, Form, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TableComponent from "../TableComponent";
import InputForm from "../InputForm";
import { beforeUpload, getBase64 } from "../../utils";
import { WrapperUploadFile } from "../../pages/ProfilePage/ProfilePage.style";
import ProducService from '../../services/ProductService';
import { useMutationHooks } from '../../hooks/useMutation';
import LoadingComponent from "../LoadingComponent";

const AdminProduct = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [dataProduct, setData] = React.useState<any>({
    name: "",
    type: "",
    countInStock: 0,
    price: 0,
    description: "",
    rating: 0,
    image: "",
  });
  const mutation = useMutationHooks(
    (data: any) => ProducService.createProduct(data)
  );
  const { data, isPending, isSuccess } = mutation as any;

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async () => {
    mutation.mutate(dataProduct)
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({ ...prev, [name]: value }));
  };
  const handleOnChangeAvatar = async ({ fileList }: any) => {
    const file = fileList[0];
    if (!file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setData((prev: any) => ({ ...prev, image: file.preview }));
  };
  
  return (
    <div>
      <WrapperHeader>Quản lý Sản phẩm</WrapperHeader>
      <div style={{ marginTop: "10px" }}>
        <Button
          style={{ height: "150px", width: 150, borderStyle: "dashed" }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined style={{ fontSize: "60px" }} />
        </Button>
      </div>
      <TableComponent />
      <Modal
        title="Thêm sản phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <LoadingComponent isLoading={isPending}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[
              { required: true, message: "Please input your product name!" },
            ]}
          >
            <InputForm
              onChange={handleChange}
              value={dataProduct.name}
              name="name"
              placeholder="Nhập tên sản phẩm"
            />
          </Form.Item>

          <Form.Item
            label="Type"
            name="type"
            rules={[
              { required: true, message: "Please input your product type!" },
            ]}
          >
            <InputForm
              onChange={handleChange}
              value={dataProduct.type}
              name="type"
              placeholder="Type"
            />
          </Form.Item>

          <Form.Item
            label="Count in stock"
            name="countInStock"
            rules={[
              { required: true, message: "Please input your product stock!" },
            ]}
          >
            <InputForm
              onChange={handleChange}
              value={dataProduct.countInStock}
              name="countInStock"
              placeholder="Stock"
              type="number"
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please input your product price!" },
            ]}
          >
            <InputForm
              onChange={handleChange}
              value={dataProduct.price}
              name="price"
              placeholder="Price"
              type="number"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your product description!",
              },
            ]}
          >
            <InputForm
              value={dataProduct.description}
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="rating"
            rules={[
              { required: true, message: "Please input your product rating!" },
            ]}
          >
            <InputForm
              onChange={handleChange}
              value={dataProduct.rating}
              name="rating"
              placeholder="Rating"
              type="number"
            />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              { required: true, message: "Please input your product image!" },
            ]}
          >
            <WrapperUploadFile onChange={handleOnChangeAvatar} beforeUpload={beforeUpload} maxCount={1}>
              <Button>Select File</Button>
              {dataProduct?.image && (
                <img
                  src={dataProduct.image}
                  alt="avatar"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginLeft: "10px",
                  }}
                />
              )}
            </WrapperUploadFile>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </LoadingComponent>
      </Modal>
    </div>
  );
};

export default AdminProduct;
