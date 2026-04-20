const photoSrc = "https://www.figma.com/api/mcp/asset/d75b87d9-1306-47bd-a428-4c6dc7bd9f84";

export default function FullBleedPhoto() {
  return (
    <div className="w-full h-[50vw] md:h-[900px] overflow-hidden">
      <img
        src={photoSrc}
        alt=""
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
