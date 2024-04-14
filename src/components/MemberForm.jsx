import { useEffect, useState } from 'react';


function MemberForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [phoneType, setPhoneType] = useState('')

    useEffect(() => {
      const errors = {};
      if (!name.length) errors.name = 'Name is required, can not be empty'
      if (!email.length || !email.includes('@')) errors.email = 'Email is required, and must be a valid email address'
      if (phoneNumber.length && isNaN(parseInt(phoneNumber))) errors.phoneNumber = 'Optional. If included, must be a valid phone number'
      if (phoneNumber.length && !phoneType.length) errors.phoneType = 'Must state phone type if including phone number'
      setValidationErrors(errors)
    }, [name, email, phoneNumber, phoneType])

    const onSubmit = (e) => {
      e.preventDefault()

      if(Object.values(validationErrors).length) {
        return alert(`Errors:
          ${validationErrors.name ? `* ${validationErrors.name}` : ''}
          ${validationErrors.email ? `* ${validationErrors.email}` : ''}
          ${validationErrors.phoneNumber ? `* ${validationErrors.phoneNumber}` : ''}
          ${validationErrors.phoneType ? `* ${validationErrors.phoneType}` : ''}
        `)
      }

      const goodInfo = {
        name,
        email,
        phoneNumber: phoneNumber || null,
        phoneType: phoneType || null,
        submissionDate: new Date()
      }

      console.log(goodInfo)

      setName('');
      setEmail('');
      setPhoneNumber('');
      setPhoneType('');
      setHasSubmitted(false);
    }

    return (
      <>
        <h1></h1>
        <form onSubmit={onSubmit}>
          <div className='input'>
            <label htmlFor='name'>Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}></input>
              <div className='errors' style={{ color: 'red' }}>
                {hasSubmitted && validationErrors.name ? `* ${validationErrors.name}` : ''}
              </div>
          </div>
          <div className='input'>
            <label htmlFor='email'>Email</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}></input>
              <div className='errors' style={{ color: 'red' }}>
                {hasSubmitted && validationErrors.email ? `* ${validationErrors.email}` : ''}
              </div>
          </div>
          <div className='input'>
            <label htmlFor='phoneNumber'>Phone number</label>
            <input
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}></input>
              <div className='errors' style={{ color: 'red' }}>
                {hasSubmitted && validationErrors.phoneNumber ? `* ${validationErrors.phoneNumber}` : ''}
              </div>
          </div>
          <div className='input'>
            <label htmlFor='name'>Phone Type</label>
            <select
            value={phoneType}
            onChange={e => setPhoneType(e.target.value)}
            >
              <option value={''} disabled>Chose a phone type...</option>
              <option>Mobile</option>
              <option>Work</option>
              <option>Home</option>
              <option>Banana Phone</option>
            </select>
              <div className='errors' style={{ color: 'red' }}>
                {hasSubmitted && validationErrors.phoneType ? `* ${validationErrors.phoneType}` : ''}
              </div>
          </div>
          <button type='submit' onClick={() => setHasSubmitted(true)}>Submit</button>
        </form>
      </>
    )
}


export default MemberForm;
