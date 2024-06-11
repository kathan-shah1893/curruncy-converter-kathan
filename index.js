import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_iJCq6iHayUGD4w1U8PN6G884ambDWqh2lR2lGn7A');

export async function frequency(to,from,unit)
{
    const res = await freecurrencyapi.latest({
        base_currency: to,
        currencies: from
    })
    const multi = res.data[from]*unit
    return multi
}

frequency("USD","INR",11)