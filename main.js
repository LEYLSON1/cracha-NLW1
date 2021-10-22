const links_social_media = {
  github : "LEYLSON1",
  youtube : "Dantas18",
  facebook : "leylson.dantas",
   instagram : "instagram.com",
   twitter : "CsiLeylson"
}

function charset_social_media_links()
{
 for(let li of socia_lLinks.children) {
   const social = li.getAttribute('class')

   li.children[0].href = `https://${social}.com/${links_social_media[social]}`
 }

}
 
  
    
   function get_github_profile_infos() {

    const url =`https://api.github.com/users/${links_social_media.github}`

   fetch(url)
   .then(responde => responde.json())
   .then(data => {
     user_name.textcontent = data.name
     user_bio.textcontent = data.bio
     user_link.href = data.html_url
     use_image.src = data.avatar_url
     user_login.textcontent = data.login

   })


   }
   
  

   getGithubProfileInfos ()
