import { useEffect, useState } from "react";
import { getAllGroups } from "../services/api";
import Spinner from "../components/Spinner";
import axios from "../utils/axios";
import toast from "react-hot-toast";
import { useLoginUser } from "../components/context/LoginUserContext";
import CreateGroup from "./CreateGroup";
import { useNavigate } from "react-router-dom";

function UserGroups() {
  const [create, setCreate] = useState(false);
  const navigate = useNavigate();
  const { user } = useLoginUser();
  const [groupData, setGroupData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await getAllGroups();
      const data = response.data;
      setGroupData(data);
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setCreate(false);
    fetchData();
  }, []);

  if (loading) return <Spinner />;
  if (groupData.length < 1)
    return (
      <section className="w-full h-full flex justify-center items-center">
        <div className="bg-white shadow-lg py-20 px-10 text-3xl rounded-xl">
          There are no groups available{" "}
        </div>
      </section>
    );
  const handleJoin = (groupId, joined) => {
    if (!joined) {
      axios
        .post(`/api/groups/join/${groupId}`)
        .then((ele) => {
          if (ele.status === 200) toast.success("Group joined");
        })
        .catch((error) => {
          toast.error(
            error.response ? error.response.data.message : error.message
          );
        });
    } else {
      console.log("Viewing user");
      navigate(`${groupId}`);
    }
  };

  const handleLeave = (groupId) => {
    try {
      axios.post(`/api/groups/leave/${groupId}`);
      toast.success("You've left the group");
    } catch (error) {
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };
  function handleGroupMessage(id) {
    navigate(`${id}`);
  }
  if (create)
    return (
      <CreateGroup
        setCreate={setCreate}
        url="/api/groups/create"
        nameId="Group"
      />
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Groups</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {groupData.map((group) => (
          <div
            key={group._id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
            onClick={() => handleGroupMessage(group._id)}
          >
            <h3 className="text-xl font-bold mb-2">{group.name}</h3>
            <p className="text-gray-600 mb-4">{group.description}</p>
            {group.status === "pending" ? (
              <p className="">Group is under review</p>
            ) : (
              <div className="flex justify-between items-center">
                {group.members.includes(user) ? (
                  <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleGroupMessage(group._id)}
                  >
                    View
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    onClick={() =>
                      handleJoin(group._id, group.members.includes(user))
                    }
                  >
                    Join
                  </button>
                )}
                {group.members.includes(user) && (
                  <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                    onClick={() => handleLeave(group._id)}
                  >
                    Leave
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <p
          className="cursor-pointer text-center text-lg font-medium border-black border-2 mb-6 px-4 py-2 hover:text-white hover:bg-black transition-all duration-200"
          onClick={() => setCreate(true)}
        >
          Create Group
        </p>
      </div>
    </div>
  );
}

export default UserGroups;
