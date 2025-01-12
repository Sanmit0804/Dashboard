import React, { useState } from 'react';
import SelectDropdown from '@/components/shared/SelectDropdown';
import Loading from '@/components/shared/Loading';
import useLocationData from '@/hooks/useLocationData';
import PasswordWidget from '../widgets/PasswordWidget';

const CreateUserForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', role: 'manager' });
  const { loading } = useLocationData();

  const userRoleOptions = [
    { value: 'admin', label: 'Admin', icon: "feather-at-sign" },
    { value: 'manager', label: 'Manager', icon: "feather-users" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (option) => {
    setFormData({ ...formData, role: option.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    setFormData({ firstName: '', lastName: '', email: '', password: '', role: 'manager' });
  };

  return (
    <>
      {loading && <Loading />}
      <div className="card stretch stretch-full">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">First Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name <span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-4">

              <div className="col-md-6">
                <label className="form-label">Email <span className="text-danger">*</span></label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Password <span className="text-danger">*</span></label>
                <PasswordWidget
                  name="password"
                  onChange={handleChange}
                  value={formData.password || ''}
                  placeholder="Password"
                  required={true}
                />

              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Role <span className="text-danger">*</span></label>
              <SelectDropdown
                searchAvailable={false}
                options={userRoleOptions}
                defaultSelect={formData.role}
                onSelectOption={handleRoleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateUserForm;
