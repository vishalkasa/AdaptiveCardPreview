import React, { useState } from 'react';
import Select from 'react-select';

const App = () => {
  const [adjustmentPeriod, setAdjustmentPeriod] = useState({ value: 'abc', label: 'abc' });
  const [fiscalMonth, setFiscalMonth] = useState('abc');
  const [salesUnit, setSalesUnit] = useState([{ value: 'abc', label: 'abc' }]);
  const [fieldAreas, setFieldAreas] = useState('abc');
  const [fieldRegion, setFieldRegion] = useState('abc');
  const [productCategory, setProductCategory] = useState('abc');
  const [hasAdjustment, setHasAdjustment] = useState('abc');

  const handleFilterChange = (value, filterName) => {
    switch (filterName) {
      case 'AdjustMentPeriod':
        setAdjustmentPeriod(value);
        break;
      case 'FiscalMonth':
        setFiscalMonth(value);
        break;
      case 'SalesUnit':
        setSalesUnit(value);
        break;
      case 'fieldAreas':
        setFieldAreas(value);
        break;
      case 'fieldregion':
        setFieldRegion(value);
        break;
      case 'ProductCategory':
        setProductCategory(value);
        break;
      case 'HasAdjustment':
        setHasAdjustment(value);
        break;
      default:
        break;
    }
  };

  const filterOptions = ["abc", "bcd"]; // Dummy data for filter options

  return (
    <div style={{
      marginTop: '-46px',
      textAlign: 'center',
      width: '100%',
      alignItems: 'center'
    }}
      className="top-nav">
      <div style={{ display: 'flex', width: '100%' }}>
        <div className='adjustment filter-label'>
          <label>Master Filters</label>
        </div>

        <div className='adjustment mr-10'>
          <label>Adjustment Period</label>
          <Select
            aria-label="select"
            options={filterOptions.map(option => ({ value: option, label: option }))}
            value={adjustmentPeriod}
            name="AdjustMentPeriod"
            onMenuScrollToBottom="true"
            onChange={(value) => handleFilterChange(value, 'AdjustMentPeriod')}
          />
        </div>

        <div className="adjustment mr-10" style={{ display: 'inline' }}>
          <label>Fiscal Month</label>
          <Select
            aria-label="select"
            placeholder="Select"
            options={filterOptions.map(option => ({ value: option, label: option }))}
            value={{ value: "abc", label: "abc" }}
            name="FiscalMonth"
            onMenuScrollToBottom="true"
            onChange={(value) => handleFilterChange(value, 'FiscalMonth')}
          />
        </div>

        <div className="adjustment salesunit mr-10" style={{ display: 'inline' }}>
          <label>Field Subsidiary</label>
          <Select
            aria-label="select"
            placeholder="Select"
            isMulti
            options={filterOptions.map(option => ({ value: option, label: option }))}
            value={salesUnit}
            name="SalesUnit"
            onMenuScrollToBottom="true"
            onChange={(value) => handleFilterChange(value, 'SalesUnit')}
          />
        </div>

        <div className="adjustment mr-10" style={{ display: 'inline' }}>
          <label>Field Area</label>
          <Select
            aria-label="select"
            placeholder="Select"
            options={filterOptions.map(option => ({ value: option, label: option }))}
            value={fieldAreas}
            name="fieldAreas"
            onMenuScrollToBottom="true"
            onChange={(value) => handleFilterChange(value, 'fieldAreas')}
          />
        </div>

        <div className="adjustment mr-10" style={{ display: 'inline' }}>
          <label>Field Region</label>
          <Select
            aria-label="select"
            placeholder="Select"
            options={filterOptions.map(option => ({ value: option, label: option }))}
            value={fieldRegion}
            name="fieldregion"
            onMenuScrollToBottom="true"
            onChange={(value) => handleFilterChange(value, 'fieldregion')}
          />
        </div>

        <div className="adjustment mr-10" style={{ display: 'inline' }}>
          <label>Product Category</label>
          <Select
            aria-label="select"
            placeholder="Select"
            options={filterOptions.map(option => ({ value: option, label: option }))}
            value={productCategory}
            name="ProductCategory"
            onMenuScrollToBottom="true"
            onChange={(value) => handleFilterChange(value, 'ProductCategory')}
          />
        </div>

        <div className="adjustment mr-10" style={{ display: 'inline' }}>
          <label>Has Adjustment</label>
          <Select
            aria-label="select"
            placeholder="Select"
            options={filterOptions.map(option => ({ value: option, label: option }))}
            value={hasAdjustment}
            name="HasAdjustment"
            onMenuScrollToBottom="true"
            onChange={(value) => handleFilterChange(value, 'HasAdjustment')}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
