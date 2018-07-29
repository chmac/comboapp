import React from "react";

const Categories = () => {
    return (
        <div style={{textAlign: 'left'}}>
            <p>Risk & Synergy - These drugs work together to cause an effect greater than the sum of its parts, and they aren't likely to cause an adverse or undesirable reaction when used carefully. Additional research should always be done before combining drugs.</p>

<p>Low Risk & No Synergy - Effects are just additive. The combination is unlikely to cause any adverse or undesirable reaction beyond those that might ordinarily be expected from these drugs. </p>

<p>Caution - These combinations are not usually physically harmful, but may produce undesirable effects, such as physical discomfort or overstimulation. Extreme use may cause physical health issues. Synergistic effects may be unpredictable. Care should be taken when choosing to use this combination. </p>

<p>Unsafe - There is considerable risk of physical harm when taking these combinations, they should be avoided where possible. </p>
<p>Dangerous - These combinations are considered extremely harmful and should always be avoided. 
    Reactions to these drugs taken in combination are highly unpredictable and have a potential to cause death. </p>
</div>
    );
};

export default  Categories;