function TeamMemberCard({ name, role, image }) {
  return (
    <div className="flex flex-col items-center text-center">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-90 object-cover rounded-md mb-3"
        />
      ) : (
        <div className="w-40 h-40 bg-gray-300 rounded-md mb-3" />
      )}
      <h4 className="text-blue font-semibold">{name}</h4>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}

export default TeamMemberCard;
