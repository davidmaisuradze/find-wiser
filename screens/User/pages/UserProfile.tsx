import React, { FC, useEffect} from 'react';
import { Text, View } from 'react-native';
import { useGetCurrentUserProfileService } from '../store/services';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const UserProfile: FC = () => {
  const getCurrentUserProfileService = useGetCurrentUserProfileService();

  const {user, loading} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    getCurrentUserProfileService();
  }, [getCurrentUserProfileService]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>User Profile</Text>
      <Text>firstname: {user?.firstName}</Text>
      <Text>lastname: {user?.lastName}</Text>
      <Text>email: {user?.email}</Text>
      <Text>mobilePhone: {user?.mobilePhone}</Text>
      <Text>avatar: {user?.avatarUrl}</Text>
    </View>
  );
}

export default UserProfile;
