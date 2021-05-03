export default function(option) {
  let final = `name="${option.name}", description="${option.description}", option_type=${option.type}, required=`
  if(option.required === true) {
    final += `True`;
  }else{
    final += `False`;
  }
  return final;
}