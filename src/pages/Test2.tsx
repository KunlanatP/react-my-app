import { Table, Button, Row, Col, Form, Input, Select, DatePicker, Radio, Collapse } from 'antd';
import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, deleteAllUsers } from './../store/slices/userSlice';
import { setSelectedRowKeys, clearSelectedRowKeys } from './../store/slices/selectionSlice';
import { RootState } from './../store/store';
import { useTranslation } from "react-i18next";
import styles from "./Test2.module.scss";
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { Panel } = Collapse;
export type Key = React.Key;

function Test2() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const selectedRowKeys = useSelector((state: RootState) => state.selection.selectedRowKeys);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const newUser = {
      key: `${users.length + 1}`,
      title: values.title,
      firstname: values.firstname,
      lastname: values.lastname,
      citizenID: values.citizenID,
      birthday: values.birthday.format('YYYY-MM-DD'),
      nationality: values.nationality,
      gender: values.gender,
      mobilePhone: values.mobilePhone,
      passport: values.passport,
      expectedSalary: values.expectedSalary,
    };

    dispatch(addUser(newUser));
    form.resetFields();
  };

  const handleDeleteSelected = () => {
    selectedRowKeys.forEach((key) => dispatch(deleteUser(`${key}`)));
    dispatch(clearSelectedRowKeys());
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllUsers());
    dispatch(clearSelectedRowKeys());
  };

  const titleList = [t`txt_mr`, t`txt_mrs`, t`txt_ms`]

  const fillForm = () => {
    form.setFieldsValue({
      title: titleList[Math.floor(Math.random() * 3)],
      firstname: 'John',
      lastname: 'Doe',
      citizenID: '1-23456-7890-1-23',
      birthday: moment('1990-01-01'),
      nationality: 'Thai',
      gender: 'male',
      mobilePhone: '(+66) 12 345 6789',
      passport: 'A12345678',
      expectedSalary: Math.floor(15000 + Math.random() * 50000),
    });
  };

  const columns = [
    {
      title: t`txt_title`,
      dataIndex: 'title',
      sorter: (a: any, b: any) => a.title.localeCompare(b.title),
    },
    {
      title: t`txt_first_name`,
      dataIndex: 'firstname',
      sorter: (a: any, b: any) => a.firstname.localeCompare(b.firstname),
    },
    {
      title: t`txt_last_name`,
      dataIndex: 'lastname',
      sorter: (a: any, b: any) => a.lastname.localeCompare(b.lastname),
    },
    {
      title: t`txt_citizen_id`,
      dataIndex: 'citizenID',
      sorter: (a: any, b: any) => a.citizenID.localeCompare(b.citizenID),
    },
    {
      title: t`txt_birthday`,
      dataIndex: 'birthday',
      sorter: (a: any, b: any) => new Date(a.birthday).getTime() - new Date(b.birthday).getTime(),
    },
    {
      title: t`txt_nationality`,
      dataIndex: 'nationality',
      sorter: (a: any, b: any) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: t`txt_gender`,
      dataIndex: 'gender',
      sorter: (a: any, b: any) => a.gender.localeCompare(b.gender),
    },
    {
      title: t`txt_mobile_phone`,
      dataIndex: 'mobilePhone',
      sorter: (a: any, b: any) => a.mobilePhone.localeCompare(b.mobilePhone),
    },
    {
      title: t`txt_passport_no`,
      dataIndex: 'passport',
      sorter: (a: any, b: any) => a.passport.localeCompare(b.passport),
    },
    {
      title: t`txt_expected_salary`,
      dataIndex: 'expectedSalary',
      sorter: (a: any, b: any) => a.expectedSalary - b.expectedSalary,
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: Key[]) => {
      dispatch(setSelectedRowKeys(newSelectedRowKeys));
    },
  };

  return (
    <div className={styles.container}>
      <h1>{t`txt_test2`}</h1>
      <h2>{t`txt_form_table`}</h2>

      <div className={styles.backButtonPanel}>
        <Button
          type="default"
          onClick={() => navigate('/')}
        >
          ◁ {t`bt_back_to_main_page`}
        </Button>
      </div>

      <Collapse defaultActiveKey={['1']} accordion className={styles.containerPanel}>
        <Panel header={t`txt_information_form`} key="1">
          <Form
            form={form}
            name="citizen_id_form"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={4}>
                <Form.Item
                  label={t`txt_title`}
                  name="title"
                  rules={[{ required: true }]}
                >
                  <Select placeholder={t`txt_select_your_title`}>
                    <Option value="Mr">{t`txt_mr`}.</Option>
                    <Option value="Mrs">{t`txt_mrs`}.</Option>
                    <Option value="Ms">{t`txt_ms`}.</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  label={t`txt_first_name`}
                  name="firstname"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item
                  label={t`txt_last_name`}
                  name="lastname"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={t`txt_citizen_id`}
                  name="citizenID"
                  rules={[
                    { required: true, message: t`txt_citizen_id_required` },
                    { pattern: /^\d{1}-\d{5}-\d{4}-\d{1}-\d{2}$/, message: t`txt_citizen_id_format` },
                  ]}
                >
                  <Input placeholder={`${t('txt_citizen_id')}: #-#####-####-#-##`} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={t`txt_birthday`}
                  name="birthday"
                  rules={[{ required: true }]}
                >
                  <DatePicker placeholder={t`txt_select_date`} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={t`txt_nationality`}
                  name="nationality"
                  rules={[{ required: true }]}
                >
                  <Select placeholder={t`txt_select_nationality`}>
                    <Option value="Thai">{t`txt_thai`}</Option>
                    <Option value="Other">{t`txt_other`}</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={t`txt_gender`}
                  name="gender"
                  rules={[{ required: true }]}
                >
                  <Radio.Group>
                    <Radio value="male">{t`txt_male`}</Radio>
                    <Radio value="female">{t`txt_female`}</Radio>
                    <Radio value="unsex">{t`txt_unsex`}</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={t`txt_mobile_phone`}
                  name="mobilePhone"
                  rules={[{ required: true, message: t`txt_phone_required` }]}
                >
                  <Input placeholder="(+00) 00 000 0000" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={t`txt_passport_no`}
                  name="passport"
                  rules={[{ required: true, message: t`txt_passport_required` }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={t`txt_expected_salary`}
                  name="expectedSalary"
                  rules={[{ required: true, message: t`txt_salary_required` }]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Button type="primary" onClick={fillForm} style={{ marginRight: '8px' }}>
                  {t`bt_Fill`}
                </Button>
                <Button type="primary" htmlType="submit">
                  {t`bt_submit`}
                </Button>
              </Col>
            </Row>
          </Form>
        </Panel>
      </Collapse>

      <div style={{ paddingTop: '60px' }}>
        <Button
          color="danger"
          onClick={handleDeleteSelected}
          disabled={selectedRowKeys.length === 0}
          style={{ marginTop: '16px' }}
        >
          {t`bt_delete_selected`}
        </Button>
        <Button
          color="danger"
          onClick={handleDeleteAll}
          style={{ marginTop: '16px', marginLeft: '8px' }}
        >
          {t`bt_delete_all`}
        </Button>
      </div>

      <div className={styles.tablePanel}>
        <Table
          rowSelection={rowSelection}
          dataSource={users}
          columns={columns}
          pagination={{ pageSize: 5 }}
          rowKey="key"
        />
      </div>
    </div>
  );
}

export default Test2;
