import React from "react";
import './HomeGrid.css';

const HomeGrid = () => {
  return(
    <section className='homegrid'>
      <div className='homegrid-main'>
        <img alt='veja os próximos lançamentos em nosso instagram' src='https://bn02pap001files.storage.live.com/y4mkTaEaKzxNP7Br5zP3S1iZozsv0JepA_Je8JPCfeZK5HaUcZgwW9j9whqcMi_DHtxLqNvktyvQjsap02n8fy573-7oFO65VK5YcHEyztWsnuxe2UepVOu0EQHucWzWEKgFDR2CDvyzLE07yjA_1zUfz2ZWrucPbO-Phm0WXXG_lSqKcr2fxKCDjYKdw5dyW_T?width=1000&height=1000&cropmode=none' />
      </div>
      <div className='homegrid-sec'>        
        <div>
          <img alt='Frete grátis para compras acima de R$ 300' src='https://bn02pap001files.storage.live.com/y4mCqCA1_WDi_HJkv20w3H44S0kzMUbpcGs1i7TRCt8aHQvpffH8Sxuixqed5yr0k2bdt1FnXk7jDxMZVNMzbWz79KKsCzPKLqrsy7tVbsdYpPEv5ozOTJ9ICUKm0zGYKPs4jBkDPP5vq0_WjojCmEhGKT3402HvEWwv7-9KihW8xzxjmDrdN1qUEFlIaa9lK2D?width=1000&height=500&cropmode=none' />
        </div>
        <div>
          <img alt='Receba brindes nas compras acima de R$ 600' src='https://bn02pap001files.storage.live.com/y4m1qAq9-72HDsS9YmDm4oTxtJ7St473LkjZShBU2ieJxhS7Ae2lEVe0ksXwpseBCy2bQoWqkoBR4HCdSUvjXlKcaJaBqxnIyvHOC8Unj4K_Ma7qpC_MWbUdX0_4e2tCoSnb0Vj5vno4Hk8nS789CZGW-HFabJBvej6WmTWq73w8y672ywtOfmXPxSWGe31SLJS?width=1000&height=500&cropmode=none' />
        </div>
      </div>
    </section>
  )
};

export default HomeGrid;