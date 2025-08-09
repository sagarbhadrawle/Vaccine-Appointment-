package com.vaccine.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.vaccine.exception.InvalidMemberException;
import com.vaccine.model.Member;


public interface MemberService {

	public List<Member> getAllMember(Pageable pageable);


	public Member getMemberById(Integer id) throws InvalidMemberException;

	public Member getMemberByAadharNo(String aadharNo) throws InvalidMemberException;

	public Member getMemberByPanNo(String panNo) throws InvalidMemberException;

	public Member addMember(Member member, Integer userId) throws InvalidMemberException;

	public Member updateMember(Member member, Integer memberId) throws InvalidMemberException;

	public Boolean deleteMember(Integer id) throws InvalidMemberException;
}
