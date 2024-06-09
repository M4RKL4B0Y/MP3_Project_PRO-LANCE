function Invoice() {
  return (
    <main>
      <h1>Invoice</h1>

      <h2>Company</h2>

      <div>
        <input name="companyname" type="text" placeholder="Company Name" />
      </div>
      <div>
        <input name="phone" type="text" placeholder="Phone" />
      </div>
      <div>
        <input name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <input name="address" type="text" placeholder="Address" />
      </div>
      <div>
        <input name="city" type="text" placeholder="City" />
      </div>
      <div>
        <input name="state" type="text" placeholder="State" />
      </div>
      <div>
        <input name="zip" type="text" placeholder="Zip" />
      </div>
      <div>
        <input name="country" type="text" placeholder="Country" />
      </div>

      <h2>Bill to</h2>

      <div>
        <input name="firstname" type="text" placeholder="First Name" />
      </div>
      <div>
        <input name="lastname" type="text" placeholder="Last Name" />
      </div>
      <div>
        <input name="phone" type="text" placeholder="Phone" />
      </div>
      <div>
        <input name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <input name="address" type="text" placeholder="Address" />
      </div>
      <div>
        <input name="city" type="text" placeholder="City" />
      </div>
      <div>
        <input name="state" type="text" placeholder="State" />
      </div>
      <div>
        <input name="zip" type="text" placeholder="Zip" />
      </div>
      <div>
        <input name="country" type="text" placeholder="Country" />
      </div>

      <h2>Work Description</h2>

      <div>
        <textarea
          name="workdescription"
          type="textfeild"
          placeholder="Work Description"
        />
      </div>

      <h2>Payment</h2>

      <div>
        <input name="payment" type="text" placeholder="Payment" />
      </div>
    </main>
  );
}

export default Invoice;
