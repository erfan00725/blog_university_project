import userImg from "../../assets/images/User.webp"

export const AboutCard = () => {
  return (
    <div className='w-[930px] flex flex-col main-border'>
        <img src={userImg} alt="" />
        <div className="flex flex-col px-12 py-16">
          <h3 className="font-bold text-[30px] mb-14 leading-8">Hey! So Glad You're Here.</h3>
          <p className="post-description">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.{"\n"}{"\n"}
            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
          </p>
        </div>
    </div>
  )
}
