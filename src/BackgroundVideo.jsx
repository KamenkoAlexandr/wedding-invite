export const BackgroundVideo = () => {
  return (
    <div className="bg-video-wrap" aria-hidden="true">
      <video className="body-bg-video" autoPlay muted loop playsInline>
        <source src={`${import.meta.env.BASE_URL}bg.mp4`} type="video/mp4" />
      </video>
    </div>
  )
}
