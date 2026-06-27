const skills=[
"Communication",
"Leadership",
"MS Office",
"Programming",
"Teamwork"
];

export default function Skills(){

return(

<section id="skills" className="py-24 px-6">

<h2 className="text-center text-5xl font-bold">
Skills
</h2>

<div className="skills-grid grid md:grid-cols-5 gap-8 mt-12 max-w-6xl mx-auto">

{skills.map(skill=>(
<div
key={skill}
className="skill-pill glass p-8 rounded-full text-center"
>
{skill}
</div>
))}

</div>

</section>

)

}
